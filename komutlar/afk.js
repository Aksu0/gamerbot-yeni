const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args, renk, dil) => {
var zaman = new Date().getTime()
var sebep = args.join(" ")
if(!sebep) return message.channel.send(dil.doğrukullanım)

db.set(`kullanicilar.${message.author.id}.afk`, `{"zaman": "${zaman}", "sebep": "${sebep}"}`)
message.channel.send(client.emojiler.evet + " afk moduna geçtiniz!")
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "Kullanıcı"
};

exports.help = {
  name: 'afk',
  description: 'AFK Moduna geçersiniz',
  usage: 'afk <sebep>'
};