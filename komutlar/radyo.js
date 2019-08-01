const Discord = require('discord.js');
const ytdl = require('ytdl-core')
exports.run = (client, message, args) => {
var istek = args[0]
var risim = []
var radyolar = [
  {"isim": "Fenomen", "link": "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio", "yt": "hayır"},
  {"isim": "Metro", "link": "http://17773.live.streamtheworld.com/METRO_FM_SC", "yt": "hayır"},
  {"isim": "NR1", "link": "http://nr1digitalsc.radyotvonline.com/stream/264/", "yt": "hayır"},
  {"isim": "Power", "link": "http://powerfm.listenpowerapp.com/powerfm/mpeg/icecast.audio", "yt": "hayır"},
  {"isim": "Slowtürk", "link": "https://radyo.dogannet.tv/slowturk", "yt": "hayır"},
  {"isim": "Joytürk", "link": "http://17733.live.streamtheworld.com/JOY_TURK_SC", "yt": "hayır"},
  {"isim": "Mydonose", "link": "http://17753.live.streamtheworld.com/RADIO_MYDONOSE128AAC_SC", "yt": "hayır"},
  {"isim": "Efkar", "link": "http://17703.live.streamtheworld.com/EFKAR.mp3", "yt": "hayır"},
  {"isim": "Ülku", "link": "http://yayin.canliradyolive.com/ulku-fm/live/icecast.audio", "yt": "hayır"},
  {"isim": "Alem", "link": "https://www.youtube.com/watch?v=pw60B0ZCrZ4", "yt": "evet"}
]

radyolar.forEach(a => risim.push(a.isim))
if(!risim.includes(istek)) return message.channel.send('**Kullanılabilir radyolar:** ' + risim.join("FM ,"))
var link;
var yt;
radyolar.forEach(a => {
  if(a.isim.toLowerCase().match(istek)) {
    if(a.yt === "evet") yt = "evet"
    link = a.link
}})
    message.member.voiceChannel.join().then(connection => {
    message.guild.me.setDeaf(true)
    if(yt === "evet") {
    connection.playStrem(ytdl(link))
    } else {
    require('http').get(link, (res) => {
            connection.playStream(res);
    })}})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "Sahip"
};

exports.help = {
  name: 'radyo',
  description: 'Radyo çalarsınız',
  usage: 'radyo <isim/sayı>'
};