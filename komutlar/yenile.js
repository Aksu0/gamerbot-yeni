exports.run = async (client, message, args, dil, renk) => {
var token = client["token"]
message.channel.send(client.emojiler.evet + "| Bot yeniden başlatılıyor.") 

client.destroy()

setTimeout(() => {
  client.login(token)
}, 1000)

setTimeout(() => {
  message.channel.send(client.emojiler.evet + '| Bot Yeniden Başlatıldı!')
}, 10000)

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reboot"],
  permLevel: 5,
  kategori: "Sahip"
};
exports.help = {
  name: 'yenile',
  description: 'Bota restart atar!',
  usage: 'yenile'
};