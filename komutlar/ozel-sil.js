const db = require('quick.db')

exports.run = (client, message, args, dil) => {    
var ne = args.slice(0).join(" ")
if(!ne) return message.channel.send('Silmek istediğiniz yanıtlayıcı ismini giriniz')
var yanıtlayıcı = db.fetch(`sunucular.${message.guild.id}.ok`)
if(!yanıtlayıcı) return message.channel.send('Herhangi Bir Yanıtlayıcı Bulunamadı');

var asd = []
yanıtlayıcı.forEach(aa => {
  var a = JSON.parse(aa)
  if(!a.isim.match(ne)) return asd.push(aa);
})

db.delete(`sunucular.${message.guild.id}.ok`)
asd.forEach(a => db.push(`sunucular.${message.guild.id}.ok`,a))
message.channel.send(':white_check_mark: | **' + ne + "** isimli yanıtlayıcı silinmiştir")
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["öks","özelkomutsil"],
 permLevel: 4,
 kategori: "Özel-Komut"
};

exports.help = {
 name: 'özel-komut-sil',
 description: 'İsmini yazdığınız özel komutu siler',
 usage: 'özelkomutsil <komutismi>'
};