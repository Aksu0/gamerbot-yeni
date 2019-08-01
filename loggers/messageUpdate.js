module.exports = (newMessage, oldMessage, Discord, webhook) => {

    webhook.send(new Discord.RichEmbed()
    .setColor('ORANGE')
    .setFooter(newMessage.author.tag + " tarafınan #" + newMessage.channel.name + " kanalında", newMessage.author.avatarURL)
    .setAuthor('Mesaj Düzenleme')
    .addField('Önceki Mesaj:', oldMessage.content)
    
    .addField('Şimdiki Mesaj:', newMessage.content)
    ).catch(() => { return false; })
  
}