exports.run = async (client, message, args, dil, renk) => {
var komut = args[0]
if(!komut) return message.channel.send(dil.doğrukullanım)

var cmd;
if(client.commands.has(komut)) cmd = client.commands.get(komut).help.name
else if(client.aliases.has(komut)) cmd = client.aliases.get(komut).help.name
else return message.channel.send(':warning: | Komut bulunamadı')

 
client.reload(cmd).catch(e => {
  if(e) { message.channel.send(':warning: | Bir Hata oluştu'); console.warn(e) }
  else return message.channel.send(client.emojiler.evet + "| komut yenilendi")
})
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