const Discord = require('discord.js');

exports.run = async (client, message, args, dil, renk) => {
var şar = []
var siralama = 0;
message.guild.emojis.forEach(a => şar.push(a.toString()))
if(!args[0]) args[0] = 1
if(args[0] > şar.length) args[0] = 1 

if(şar.length === 0) return message.channle.send("Emoji yok")
  
message.channel.send(
new Discord.RichEmbed()
.setColor(renk)
.addField(`Sunucu Emojileri`, `${şar.slice(args[0] * 15 - 15, args[0] * 15).join(" | ")}`)
.setFooter(`Sayfa: ${args[0]}/${Math.ceil(şar.length / 15)}`)
)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Kullanıcı"
};
 
exports.help = {
  name: 'emojiler',
  description: 'Sunucu Emojilerini Gösterir',
  usage: 'emojiler [sayfa]'
};