const Discord = require('discord.js');

exports.run = async (client, message, args, dil, renk, dbl) => {
dbl.hasVoted(message.author.id).then(v => {
  if(!v) return message.channel.send("DBL Üzeri Oy Tespit Edilemedi. Oylamak için https://discordbots.org/bot/" + client.user.id + "/vote")
var content = args.join(" ").split("")
var b = []
content.forEach(a => b.push(a))

message.channel.send(b.join(" "))

})}

exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: [],
    permLevel: 0 ,
    kategori: "Eğlence"
  };
  
  exports.help = {
    name: 'vaporwave', 
    description: 'Yazdığınız yazı arasına boşluk ekleyerek tekrar yazar',
    usage: 'vaporwave <yazı>'
  };