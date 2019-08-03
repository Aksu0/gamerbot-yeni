const Discord = require('discord.js')
const db = require('quick.db')
                   
exports.run = async (client, message, args, dil, renk) => {
var ak = args[0]
if(!ak) return message.channel.send(dil.doğrukullanım)
var üye = client.users.get(args[1])
if(!üye) return message.channel.send(dil.doğrukullanım)

if(ak === "aç") {
db.set(`karaliste.${üye.id}`,"aktif")
message.channel.send(`**${üye.username}** adlı üye karalisteye alındı`)
} else if(ak === "kapat") {
db.delete(`karaliste.${üye.id}`)
message.channel.send(`**${üye.username}** adlı üye karalisteden alındı`)  
} else return message.channel.send(dil.doğrukullanım)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 6,
  kategori: "Sahip"
};
exports.help = {
  name: 'karaliste',
  description: 'Belirtilen kullanıcıyı karalisteye alır',
  usage: 'karaliste <üyeid>'
};