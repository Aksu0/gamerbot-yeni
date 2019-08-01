const Discord = require("discord.js")
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = (client, message) => {

if (message.guild.id !== ayarlar.desteksunucuid) return message.channel.send('Bu Komutu Kullanabilmek için botun destek sunucusunda olmalısın. Bot destek sunucusu: https://gamerbot.cf/sunucu')
  
var a = client.oykontrol(message.author)

 if (a === "hayır") return message.channel.send("DBL Üzeri Oy Tespit Edilemedi. Oylamak için https://discordbots.org/bot/" + client.user.id + "/vote")
 else {
 message.channel.send("Harika! Sana Destekçi Rolü Ve 1000 Lira Ekledim!")
 message.member.addRole("523832271476752396", "DBL den oy verdiği için rolü verilmiştir")
 db.add('para_' + message.author.id, 1000) 
 }
 setTimeout(() => {
 message.member.removeRole("523832271476752396", "12 Saat Dolduğu için destekçi rolü alınmıştır")
 }, 432000000)
 }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oyladım"],
  permLevel: 0,
  kategori: "Bot"
};

exports.help = {
  name: 'oyverdim',
  description: 'Bot Destek Sunucusunda Oy vererek hem para hem de özel bir rol kazanırsınız!',
  usage: 'oyverdim'
};