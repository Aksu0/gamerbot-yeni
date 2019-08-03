exports.run = async (client, message, args, dil, renk) => {
var komut = args[0]
if(!komut) return message.channel.send(dil.doğrukullanım)
  
client.load(komut)
.then(() => {
            message.channel.send(client.emojiler.evet + komut +  " adlı komut başarıyla aktifleştirildi");
}).catch(e => {
            message.channel.send(`:warning: | Komut yüklenirken bir hata oluştu!\n\n${e.message}`);
});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yükle"],
  permLevel: 6,
  kategori: "Sahip"
};
exports.help = {
  name: 'komutyükle',
  description: 'Sonradan eklenen bir kodu bota restart atmadan yenilersin!',
  usage: 'komutyükle komut'
};