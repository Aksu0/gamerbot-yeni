exports.run = async (client, message, args, dil, renk) => {

message.channel.send(client.emojiler.evet + "| Bot yeniden başlatılıyor.") 

process.exit(0)

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