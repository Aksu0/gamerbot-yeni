const Discord = require('discord.js');
const db = require('quick.db')

exports.run = function(client, message, args, dil) {
var neresi = message.mentions.channels.first()
if(!neresi) return message.channel.send(dil.doğrukullanım)
neresi.createWebhook(client.user.username, client.user.avatarURL)
    .then(wb => {
       var bilgi = wb.id
       var bilgii= wb.token
    

db.set(`sunucular.${message.guild.id}.modlog`, `{"id": "${bilgi}", "token": "${bilgii}"}`)
message.channel.send(`:white_check_mark: | Modlog Kanalı **${neresi.name}** adlı kanal olarak ayarlanmış ve webhook oluşturulmuştur`)

})
    .catch(e => message.channel.send(":warning: | Webhook oluşturulamadı!"))
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mod-log"],
  permLevel: 4,
  kategori: "Moderasyon"
};
exports.help = {
  name: 'modlog',
  description: 'Kayıt kanalını ayaralarsınız',
  usage: 'modlog <#kanal>'
};