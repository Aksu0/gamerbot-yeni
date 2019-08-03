exports.run = async (client, message, args, dil, renk) => {
var komut = args[0]
if(!komut) return message.channel.send(dil.doğrukullanım)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ky"],
  permLevel: 5,
  kategori: "Sahip"
};
exports.help = {
  name: 'komutyenile',
  description: 'Komut yenilersin',
  usage: 'komutyenile komut'
};