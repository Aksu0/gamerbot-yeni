exports.run = async (client, message, args, dil, renk) => {
var komut = args[0]
if(!komut) return message.channel.send(dil.doğrukullanım)

var cmd;
if(client.commands.has(komut)) cmd = client.commands.get(komut).help.name
else if(client.aliases.has(komut)) cmd = client.aliases.get(komut)
else return message.channel.send(':warning: | Komut bulunamadı')
 
client.reload(cmd)
message.channel.send(client.emojiler.evet + "| Komut yenilendi")
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ky"],
  permLevel: 6,
  kategori: "Sahip"
};
exports.help = {
  name: 'komutyenile',
  description: 'Komut yenilersin',
  usage: 'komutyenile komut'
};