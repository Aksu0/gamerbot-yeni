const db = require('quick.db')

exports.run = function(client, message, args, dil) {
var prefix = args[0]
if(!prefix) return message.channel.send(dil.hata)
if(prefix === "sıfırla") {
 db.delete(`sunucular.${message.guild.id}.prefix`)
 message.channel.send('<:evt:538361115743354901> Prefix **g!** olarak ayarlanmıştır')
} else {
if(prefix === "g!") {
 db.delete(`sunucular.${message.guild.id}.prefix`)
 message.channel.send('<:evt:538361115743354901> Prefix **g!** olarak ayarlanmıştır')  
} else {
var b = []
prefix.split("").forEach(a => b.push(a))
if(prefix.length > 6) return message.channel.send(':warning: | Prefix Maximum 6 Karakter Olabilir')
db.set(`sunucular.${message.guild.id}.prefix`, prefix)
message.channel.send('<:evt:538361115743354901> Prefix **' + prefix + '** olarak ayarlanmıştır')
}  }
}

exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: ['prefix-ayarla', 'prefixayarla'],
    permLevel: 4,
    kategori: "Moderasyon"
  };
  
  exports.help = {
    name: 'prefix', 
    description: 'Botun prefixini sunucuya özel olarak değiştirisiniz ',
    usage: 'prefix <prefix | sıfırla>'
  };