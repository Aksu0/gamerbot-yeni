exports.run = async (client, message, args, dil, renk) => {
var komut = args[0]
if(!komut) return message.channel.send(dil.doğrukullanım)
  
client.load(komut).catch(e => {
  if(!e) { message.channel.send(client.emojiler.evet + "| komut yüklendi") }
  if(e) return message.channel.send(':warning: | Bir Hata oluştu\n' + e.message)
})

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yükle"],
  permLevel: 5,
  kategori: "Sahip"
};
exports.help = {
  name: 'komutyükle',
  description: 'Sonradan eklenen bir kodu bota restart atmadan yenilersin!',
  usage: 'komutyükle komut'
};