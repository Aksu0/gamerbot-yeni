module.exports = (client) => {
const Discord = require('discord.js')
const ayarlar = require('./ayarlar.json')
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const db = require('quick.db')
var keyler = [
  "AIzaSyBabwlCIK09qZy2sy8k5fWizFkrPgfU_fY","AIzaSyBabwlCIK09qZy2sy8k5fWizFkrPgfU_fY","AIzaSyCkT_L10rO_NixDHNjoAixUu45TVt0ES"
]
  
const index = Math.floor(Math.random() * keyler.length); // Bu Kısımları Ellemeyin
const youtube = new YouTube(keyler[index])
const queue = new Map();

client.on("message", async message => {
 // let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  //const dil = (require('./ekler/dil.js')(message, command, ayarlar.prefix))
if (message.author.bot) return;
 
  var prefix = db.fetch(`sunucular.${message.guild.id}.prefix`)
  if(!prefix) prefix = "g!"
  
  var params;
  var command;
  
  var etiketpref = new RegExp(`^<@!?${client.user.id}>`);
  var test = String(message.content.match(etiketpref))
  var u;
  if(message.content.startsWith(test)) {
    command = message.content.split(' ')[1]
    params = message.content.split(' ').slice(2);
   // console.log(command + "/" + params)
    u = "çalış"
  } else {
    if(message.content.startsWith(prefix)) {
    command = message.content.split(' ')[0].slice(prefix.length);
    params = message.content.split(' ').slice(1);
    u = "çalış"
  }}
  if(u !== "çalış") return;
  
  var dil = (require("./ekler/dil.js")(message, command, prefix))
  
  var ck = db.get(`sunucular.${message.guild.id}.kanallar.${message.channel.id}.calismakanal`)
  if(ck === "aktif") return;
  
  var args = params
  console.log(args)
  //var args = message.content.substring(prefix.length).split(" ");
  //  if (!message.content.startsWith(prefix)) return;
  var karaliste = db.get(`karaliste.${message.author.id}`)
  if(karaliste === "aktif") return message.channel.send(client.emojiler.hayır+ 'Üzgünüm karalistedesin!');
  var searchString = args.slice(1).join(' ');
  var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  var serverQueue = queue.get(message.guild.id);
    switch (args) {
    case "oynat":
    case "play":
    case "p":
    if(!searchString) return message.channel.send(dil.yazılar.müzik.şarkıgir)
    var voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send(dil.yazılar.müzik.seskanal);
    var permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) return message.channel.send(dil.yazılar.müzik.izing);
    if (!permissions.has('SPEAK')) return message.channel.send(dil.yazılar.müzik.izink)
    
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      var playlist = await youtube.getPlaylist(url);
      var videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        var video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message, voiceChannel, true);
      }
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 1);
          var video = await youtube.getVideoByID(videos[0].id);
          console.log(videos[0].id)
        } catch (err) {
          console.log(err)
          if(err.message === "Cannot read property 'id' of undefined") return message.channel.send(dil.hata + dil.yazılar.müzik.yokmoruq)
          if(err.message === "Bad Request") { message.channel.send('Youtube Api key geçersiz api key değiştiriliyor'); await process.exit(0) }
          if(err.message === `The request cannot be completed because you have exceeded your <a href="/youtube/v3/getting-started#quota">quota</a>`) { message.channel.send('Youtube Api key geçersiz api key değiştiriliyor'); await process.exit(0) }
          else if(err) return message.channel.send(`${dil.hata}: ${err.message}`);
        }
      
        if(!serverQueue) { message.channel.send("**▶ " + video.title + "** " + dil.yazılar.müzik.oynatılıyor) }
        else { message.channel.send("**▶ " + video.title + "** " + dil.yazılar.müzik.eklendi) }
      }
      return handleVideo(video, message, voiceChannel);
    }
break;
    case "geç":
    case "skip":
    if (!message.member.voiceChannel) return message.channel.send(dil.yazılar.müzik.akanal);
    if (!serverQueue) return message.channel.send(dil.yazılar.müzik.şarkıçalmıyor);
    serverQueue.connection.dispatcher.end('g');
    message.channel.send(`${dil.yazılar.müzik.geçildi}`)
break;
    case "durdur":
    case "stop":
    if (!message.member.voiceChannel) return message.channel.send(`${dil.yazılar.müzik.akanal}`);
    if (!serverQueue) return message.channel.send(dil.yazılar.müzik.şarkıçalmıyor);
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end('d');
    message.channel.send(`${dil.yazılar.müzik.durduruldu}`)
break;
    case "ses":
    case "volume":
    case "v":
    if (!message.member.voiceChannel) return message.channel.send(`${dil.yazılar.müzik.akanal}`);
    if (!serverQueue) return message.channel.send(dil.yazılar.müzik.şarkıçalmıyor);  
    var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100] 
    if (args[1] && !number.some(word => message.content.includes(word))) return message.channel.send(`${dil.yazılar.müzik.sesyüz}`);  
    if (!args[1]) return message.channel.send(`${dil.yazılar.müzik.ses} **%${serverQueue.volume}**`);
    serverQueue.volume = args[1];
    if (args[1] > 100) return message.channel.send(`${dil.yazılar.müzik.sesyüz}`)
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 75);
    return message.channel.send(`${dil.yazılar.müzik.ases}: **%${args[1]}**`);
break;
    case "oynatılan":      
    case "np":
    case "nowplaying":

    if (!serverQueue) return message.channel.send(dil.yazılar.müzik.şarkıçalmıyor);
		return message.channel.send(new Discord.RichEmbed()
    .setTitle(`${dil.yazılar.müzik.np}`)                            
    .addField(`${dil.yazılar.müzik.başlık}`, `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`)
    .addField(`${dil.yazılar.müzik.süre}`, `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`));
break;
      case "kuyruk":     
      case "queue":
      case "q":
        
        var şar = []
        var siralama = 0;
    if (!serverQueue) return message.channel.send(dil.yazılar.müzik.şarkıçalmıyor);
      serverQueue.songs.forEach(a => şar.push(" " + a.title + "[" + a.durationm + ":" + a.durations + "]"))
      if(!args[1]) args[1] = 1
      if(args[1] > şar.length) args[1] = 1 
    const songList10 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`${dil.yazılar.müzik.kuyruk}`, `**-** ${şar.slice(args[1] * 5 - 5, args[1] * 5).join("\n**-**")}`)
    .setFooter(`${dil.yazılar.müzik.sayfa} ${args[1]}/${Math.ceil(şar.length / 5)}`)

    return message.channel.send(songList10);
break;
      case "duraklat":
      case "pause":
      if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
      return message.channel.send(`${dil.yazılar.müzik.duraklat}`);
    }
    return message.channel.send(dil.yazılar.müzik.şarkıçalmıyor);
break;
      case "devamet":
      case "devam":
      case "resume":
      if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
      return message.channel.send(`${dil.yazılar.müzik.devamet}`);
    }
    return message.channel.send(dil.yazılar.müzik.şarkıçalmıyor);
break;     
     case "tekrar":
     case "loop":
      if (serverQueue && serverQueue.playing) {
        if(serverQueue.tekrar === true) {
        serverQueue.tekrar = false
        return message.channel.send(`${dil.yazılar.müzik.tekrark}`);
        } else {
        serverQueue.tekrar = true
      return message.channel.send(`${dil.yazılar.müzik.tekrar}`);
    }}
    return message.channel.send(dil.yazılar.müzik.şarkıçalmıyor);
break;/*
      case "ilerlet":
      if(serverQueue && serverQueue.playing) {
        
      }
break;*/
    }

async function handleVideo(video, message, voiceChannel, playlist = false) {
  var serverQueue = queue.get(message.guild.id);
  var song = {
    id: video.id,
    title: video.title,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    thumbnail: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    requester: message.author.id,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    views: video.views,
  };
  if (!serverQueue) {
    var queueConstruct = {
      guild: message.guild,
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: "20",
      playing: true
    };
    queue.set(message.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      message.guild.me.setDeaf(true)
      queueConstruct.connection = connection;
      play(message.guild, queueConstruct.songs[0]);
    } catch (error) {
      queue.delete(message.guild.id);
      return message.channel.send(`Ses kanalına giremedim HATA: ${error}`);
    }
  } else {
   if (playlist) {
    serverQueue.songs.push(song);
    console.log('Eklenen Şarkı: ' + song.title)
  } else return serverQueue.songs.push(song);
  }
  return undefined;
}
  function play(guild, song) {
  var serverQueue = queue.get(guild.id);

setInterval(() => {
var sayı = serverQueue.voiceChannel.members.size

if(sayı === 1 && serverQueue.voiceChannel.members.has(client.user.id)) {
  serverQueue.voiceChannel.leave()
  serverQueue.textChannel.send(":warning: | Tüm üyeler kanaldan ayrıldı. Oynatma listesi temizlendi")
  queue.delete(message.guild.id)
}
  
}, 10000)
    
  //console.log(serverQueue.songs);

if(serverQueue.end) return
  const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'd') {
      serverQueue.voiceChannel.leave()
      queue.delete(message.guild.id)
      } else if(serverQueue.tekrar === true) { play(guild, serverQueue.songs[0]) }
      else {
			serverQueue.songs.shift();
      if(serverQueue.songs.length > 0) { play(guild, serverQueue.songs[0]) }
      else {
      serverQueue.voiceChannel.leave()
      queue.delete(message.guild.id) 
      }
		}})
  
  
    .on('error', error => message.channel.send(dil.hata + error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 60);
  
  const playingBed =  "**▶ " + song.title + "** " + dil.yazılar.müzik.oynatılıyor
 // serverQueue.textChannel.send(playingBed);

}
})
  
}