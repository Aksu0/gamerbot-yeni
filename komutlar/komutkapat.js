exports.run = async (client, message, args, dil, renk) => {
var komut = args[0]
if(!komut) return message.channel.send(dil.doğrukullanım)

var cmd;
if(client.commands.has(komut)) cmd = client.commands.get(komut).help.name
else if(client.aliases.has(komut)) cmd = client.aliases.get(komut)
else return message.channel.send(':warning: | Komut bulunamadı')
 
client.unload(cmd)
.then(() => {
            message.channel.send(client.emojiler.evet + komut +  " adlı komut başarıyla pasifleştirildi");
}).catch(e => {
            message.channel.send(`:warning: | Komut kapanırken bir hata oluştu!\n\n${e.message}`);
});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kk"],
  permLevel: 5,
  kategori: "Sahip"
};
exports.help = {
  name: 'komutkapat',
  description: 'Kodu bot yeniden başlatılana kadar devre dışı bırakırsın!',
  usage: 'komutkapat komut'
};