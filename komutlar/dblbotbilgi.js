const ayarlar = require('../ayarlar.json')
const DBL = require("dblapi.js");

exports.run = async (client, message, args, dil, renk, dbl) => {
dbl.hasVoted(message.author.id).then(v => {
  if(!v) return message.channel.send("DBL Üzeri Oy Tespit Edilemedi. Oylamak için https://discordbots.org/bot/" + client.user.id + "/vote")
const dbl = new DBL(ayarlar.dbltoken, client);

var id = args[0]
if(!id) return message.channel.send(':warning: | Bilgilerini görüntüleyeceğiniz bot ID\'sini girmelisin ')
  
message.channel.send('<a:yukleniyor:593075459835691013> Bilgiler Alınıyor').then(m => {
  
dbl.getBot(id).then(bot => {
  if(!bot) return message.channel.send(':warning: | Bot Bulunamadı!')
  var isim = bot.username + "#" + bot.discriminator
  var lib = bot.lib
  var prefix = bot.prefix
  var tags = bot.tags
  var oy = bot.points
  var sahipler = []
  bot.owners.forEach(o => { 
    dbl.getUser(o).then(u => { 
      console.log(u.username)
     // sahipler.push(`${u.username + "#"+ u.discriminator}`) 
    })
  })
  var sahipyaz;
  if(sahipler.length === "1") sahipyaz = "Sahip: "
  else sahipyaz = "Sahipler: "
  var cert;
  if(bot.certifiedBot === true) cert = "Sertifikalı"
  else cert = "Sertifikasız"
  var guild = bot.guilds
    m.edit('```\nBot ismi: ' + isim + "\nPrefix: " + prefix + "\n" + sahipyaz + sahipler.join(" , ") + "\nKütüphane: " + lib + "\nBu Ayki Oy Sayısı: " + oy + "\nEtiketler: " + tags.join(" , ") + "\nSertifika: " + cert + '```')

})
})})};

exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: [],
    permLevel: 0,
    kategori: "Sahip"
  };
  
  exports.help = {
    name: 'dblbotbilgi', 
    description: 'DiscordBotList Üzerinden Bot bilgilerini gösterir',
    usage: 'dblbotbilgi <id>'
  };