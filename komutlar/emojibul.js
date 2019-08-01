const Discord = require('discord.js');

exports.run = async (client, message, args, dil, renk, dbl) => {
dbl.hasVoted(message.author.id).then(v => {
  if(!v) return message.channel.send("DBL Üzeri Oy Tespit Edilemedi. Oylamak için https://discordbots.org/bot/" + client.user.id + "/vote")
  var isim = args[0]
  if(!isim) return message.channel.send('Aratmak istediğin emoji ismini girermisin?')
  var e = client.emojis.find(t => t.name === isim)
  if(!e) return message.channel.send('Aradığınız Emoji Bulunamadı')
  message.channel.send(e.toString())
})}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Kullanıcı"
};
 
exports.help = {
  name: 'emojibul',
  description: 'Botun bulunduğu sunucular arasında yazdığınız emojiyi arar',
  usage: 'emojibul <isim>'
};