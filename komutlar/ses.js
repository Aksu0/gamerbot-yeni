exports.run = async (client, message, args, dil, renk) => {
return;
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["volume","v"],
  permLevel: 0,
  kategori: "Müzik"
};
exports.help = {
  name: 'ses',
  description: 'Müzik ses seviyesini ayarlarsınız',
  usage: 'ses [1-100]'
};