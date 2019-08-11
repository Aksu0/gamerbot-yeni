const Discord = require('discord.js')

exports.run = async (client, message, args, dil, renk) => {

  message.channel.send(":warning: | Lütfen Yükleniyor").then(m => {
    m.edit(dil.yazılar.gecikme + ":** " + client.ping + "ms**" + `  Mesaj gecikmesi: **${new Date().getTime() -  m.createdAt}ms**`)
  })

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "Bot"
};
exports.help = {
  name: 'ping',
  description: 'Bot Pingini Gösterir',
  usage: 'ping'
};