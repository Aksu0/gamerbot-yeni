const db = require('quick.db');

exports.run = async (client, message, args, dil) => {
if(args[0] === "kapat") {
  db.delete(`sunucular.${message.guild.id}.ototag`)
  message.channel.send(`${client.emojiler.evet}| Ototag kapatıldı`)
} else {
  var kanal = message.mentions.channels.first()
  let tag = args.slice(1).join(" ")
  if (!tag) return message.channel.send(dil.doğrukullanım)
  if(!kanal) return message.channel.send(dil.doğrukullanım)
  db.set(`sunucular.${message.guild.id}.ototag`, `{"tag":"${tag}","kanal":"${kanal.id}"}`)
  message.channel.send(client.emojiler.evet + '| Oto-Tag başarıyla **'+ tag +'** olarak ayarlandı!')

}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ototag'],
  permLevel: 3,
  kategori: "Moderasyon"
};

exports.help = {
  name: 'oto-tag',
  description: 'Sunucuya Girenlere Verilecek Tagı Ayarlar',
  usage: 'oto-tag <#kanal> <tag> || ototag kapat'
};