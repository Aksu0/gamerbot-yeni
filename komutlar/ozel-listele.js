const db = require('quick.db')

exports.run = (client, message, args, dil) => {
  
    var yanıtlayıcı = db.fetch(`sunucular.${message.guild.id}.ok`)
    if(!yanıtlayıcı) return message.channel.send('Herhangi Bir Yanıtlayıcı Bulunamadı');
    var asd = []
    yanıtlayıcı.forEach(aa => {
      var a = JSON.parse(aa)
      asd.push(a.isim + " || " + a.cevap)
    })
    message.channel.send('```xl\n' + asd.join('\n') + "```")
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["ökl","özelkomutliste"],
 permLevel: 0,
 kategori: "Özel-Komut"
};

exports.help = {
 name: 'özel-komut-liste',
 description: 'Sunucu içi özel komutları listeler',
 usage: 'özelkomutliste'
};