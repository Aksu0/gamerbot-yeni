var request = require('request');

exports.run = async(client, message, args) => {
const limit = args[0]
if(!limit) limit = 0

if(isNaN(limit)) return message.channel.send("Süre limiti sayı olmalıdır.")
  
if (limit > 60) return message.channel.send("Süre limiti maksimum **60** saniye olabilir.")

request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})

message.channel.send(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`)
}
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 4,
    kategori: "Moderasyon"
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Kanal yavaşmodunu ayarlar.',
  usage: 'yavaş-mod [1/20]',
};