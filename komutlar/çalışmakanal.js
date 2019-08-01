const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")

exports.run = (client, message, args) => {
let channel;
if(message.mentions.channels.first()) channel = message.mentions.channels.first()
else {
if(message.guild.channels.find(t => t.name === args[0]) !== "null") channel = message.guild.channels.find(t => t.name === args[0])
}
  
if(!channel) return message.channel.send("Hata! Bir Kanal Etikellemeli veya Bir Kanal adı girmelisin")
  
if(!args[1]) {
 db.set(`sunucular.${message.guild.id}.kanallar.${channel.id}.calismakanal`, "aktif")
 message.channel.send(client.emojiler.evet + "| Artık **" + channel.name + "** kanalında komutlara yanıt vermeyeceğim\nBu Özelliği Kapatmak için g!çalışmakanal [kanal] kapat")
} else if(args[1] === "kapat")  {
   db.delete(`sunucular.${message.guild.id}.kanallar.${channel.id}.calismakanal`)
 message.channel.send(client.emojiler.evet + "| Artık **" + channel.name + "** kanalında komutlara yanıt vereceğim")
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
  kategori: "Moderasyon"
};

exports.help = {
  name: 'çalışmakanal',
  description: 'Ritarary Code Sunucusuna Aittir!.',
  usage: 'yardım [komut]'
};