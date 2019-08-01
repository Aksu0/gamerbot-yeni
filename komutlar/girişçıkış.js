const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args,dil) => {
if(args[0] === "kapat") {
db.delete(`sunucular.${message.guild.id}.giriscikis.kanal`)
  message.channel.send(`${client.emojiler.evet}| Giriş Çıkış başarıyla kapatıldı!`)

} else {
  let rol = message.mentions.channels.first()
   
  if(!rol) return message.channel.send(dil.doğrukullanım)

  db.set(`sunucular.${message.guild.id}.giriscikis.kanal`, rol.id)
  message.channel.send(`${client.emojiler.evet}| Giriş çıkış kanalı **${rol.name}** olarak ayarlandı!`)
  
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
  usage: 'girişçıkış <#kanal> || girişçıkış kapat'
};