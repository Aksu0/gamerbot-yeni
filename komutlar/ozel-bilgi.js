const db = require('quick.db')

exports.run = (client, message, args, dil) => {
    var ne = args[0]
    var yanıtlayıcı = db.fetch(`sunucular.${message.guild.id}.ok`)
    if(!yanıtlayıcı) return message.channel.send('Herhangi Bir Yanıtlayıcı Bulunamadı');
    var cvp;
    yanıtlayıcı.forEach(aa => {
    var a = JSON.parse(aa)
    if(!a.isim.match(ne)) return false;
    else cvp = a
    })
//  var cvp = JSON.parse(cvpp)
    var user = client.users.get(cvp.sahip).tag
    if(!user) user = `Sahip bilgileri alınamıyor. Sahip id'si ${cvp.sahip}` 
    message.channel.send('```xl\nİsim: ' + cvp.isim + '\n\nCevaplama: ' + cvp.cevap + '\n\nSahibi: ' + user + "```")
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["ökb","özelkomutbilgi"],
 permLevel: 0,
 kategori: "Özel-Komut"
};

exports.help = {
 name: 'özel-komut-bilgi',
 description: 'Belirttiğiniz kodun bilgilernii gösterir',
 usage: 'özelkomutbilgi <komut>'
};