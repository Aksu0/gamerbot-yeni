const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args,dil) => {
if(args[0] === "kapat") {
db.delete(`sunucular.${message.guild.id}.otorol`)
  message.channel.send(`:white_check_mark: | Otorol başarıyla kapatıldı!`)

} else {
  let rol = message.mentions.roles.first()
  let kanal = message.mentions.channels.first()
   
  if(!rol) return message.channel.send(dil.doğrukullanım)
  if(!kanal) return message.channel.send(dil.doğrukullanım)

  db.set(`sunucular.${message.guild.id}.otorol`, `{"id":"${rol.id}", "kanal":"${kanal.id}"}`)

  message.channel.send(`:white_check_mark: | Otorol **${rol.name}**, Otorol Kanalı <#${kanal.id}> olarak Ayarlandı!`)
  
}}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "Moderasyon"
};

exports.help = {
  name: 'otorol',  
  description: 'Sunucuya gelen kullanıcılara verilecek rolü belirler',
  usage: 'otorol <@rol> <#kanal> || otorol kapat'
};