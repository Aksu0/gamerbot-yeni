const Discord = require('discord.js');

exports.run = async (client, message, args, dil, renk, dbl) => {
dbl.hasVoted(message.author.id).then(v => {
  if(!v) return message.channel.send("DBL Üzeri Oy Tespit Edilemedi. Oylamak için https://discordbots.org/bot/" + client.user.id + "/vote")
  var isim = args[0]
  if(!isim) return message.channel.send('Aratmak istediğin emoji ismini girermisin?')
  var e = client.emojis.find(t => t.name === isim)
  if(!e) return message.channel.send(client.emojiler.hayır + '| Aradığınız Emoji Bulunamadı')
  var url;
   if (e.animated === true) {
    url = new Discord.Attachment("https://cdn.discordapp.com/emojis/" + e.id + ".gif","gamerbot-emoji.gif")
   } else {
    url = new Discord.Attachment("https://cdn.discordapp.com/emojis/" + e.id + ".png","gamerbot-emoji.png")  
   }
    message.channel.send(`**${e.name}** isminde bulunan emoji`, url)

})}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Kullanıcı"
};
 
exports.help = {
  name: 'jumbo',
  description: 'Botun olduğu sunuculara özel olarak eklenmiş emojileri arar ve resim olarak gönerir',
  usage: 'jumbo <isim>'
};