const db = require('quick.db')

exports.run = (client, message, args, dil) => {
var arg = args.join(" ").split(`;`)
var bir = arg[0]
var iki = arg[1]
if(!bir) return message.channel.send(dil.doğrukullanım)
if(!iki) return message.channel.send(dil.doğrukullanım)

var ana = db.fetch(`sunucular.${message.guild.id}.ok`)
if(ana) {
var varmı;
ana.forEach(b => {
if(bir === JSON.parse(b).isim) varmı = "eed"
else varmı = null
})
if(varmı) return message.channel.send("❌ | Bu komut zaten bulunuyor")
}
db.push(`sunucular.${message.guild.id}.ok`, `{"isim": "${bir}", "cevap": "${iki}", "sahip": "${message.author.id}"}`)
message.channel.send(':white_check_mark: | Bot Artık **' + bir + "** denilince **" + iki + "** diye cevap verecektir")
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["öke","özelkomutekle"],
 permLevel: 3,
 kategori: "Özel-Komut"
};

exports.help = {
 name: 'özel-komut-ekle',
 description: 'Sunucuya özel komut ekler.',
 usage: 'özelkomutekle <komut>;<yanıtlayıcı>'
};