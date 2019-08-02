const Discord = require('discord.js')
const db = require('quick.db')

var türler = ["klasik", "manzara"]

exports.run = async (client, message, args,dil) => {
if(args[0] === "kapat") {
db.delete(`sunucular.${message.guild.id}.giriscikis.kanal`)
  message.channel.send(`${client.emojiler.evet}| Giriş Çıkış başarıyla kapatıldı!`)

} else {
  let rol = message.mentions.channels.first()
  if(!rol) return message.channel.send(dil.doğrukullanım)
  var tür = args[1]
  if(!tür) return message.channel.send(dil.doğrukullanım) 
  if(!türler.includes(tür)) return message.channel.send('Geçerli türler: Klasik/Manzara')
  db.set(`sunucular.${message.guild.id}.giriscikis.kanal`, rol.id)
  db.set(`sunucular.${message.guild.id}.giriscikis.tur`, tür)
  message.channel.send(`${client.emojiler.evet}| Giriş çıkış kanalı **${rol.name}**, Giriş çıkış resmi **${tür}** olarak ayarlandı!`)
  
}}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gç"],
  permLevel: 3,
  kategori: "Moderasyon"
};

exports.help = {
  name: 'girişçıkış',  
  description: 'Sunucuya gelen giden kullanıcıların resimli olarak belirtlileceği kanalı belirler',
  usage: 'girişçıkış <#kanal> <klasik/manzara> || girişçıkış kapat'
};