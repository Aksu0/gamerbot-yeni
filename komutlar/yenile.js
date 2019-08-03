exports.run = async (client, message, args, dil, renk) => {
message.channel.send(client.emojiler.evet + "| Bot yeniden başlatılıyor.") 

client.destroy().then(() => {
  client.login(client["token"])
})
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