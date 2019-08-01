const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
var xp = args[0]
var rol = message.mentions.roles.first()

if(!xp) return message.channel.send("Rolün kaçıncı seviyede verileceğini yazmalısınız")
else if(!rol) return message.channel.send('Bir rol etiketlemelisin')
else if(!rol.editable) return message.channel.send('Bu rolü düzenleme yetkim bulunmadığı için kimseye veremem. Gerekli yetkiyi verdikten sonra tekrar deneyiniz')
else {

db.push(`sunucular.${message.guild.id}.seviye.odul`, `{"seviye": "${xp}", "rol": "${rol.id}"}`)
message.channel.send(`**${xp}. seviye** için ödül rolü **${rol.name}** olarak ayarlanmıştır`)
}}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['seviyeödülekle',"söe"],
    permLevel: 0,
   kategori: "Seviye"
}

exports.help = {
    name: 'seviye-ödül-ekle',
    description: 'Bot istatistiklerini gösterir',
    usage: 'istatistik'
}