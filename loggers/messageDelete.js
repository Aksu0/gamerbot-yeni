module.exports = (message, Discord, webhook) => {

    webhook.send(new Discord.RichEmbed()
    .setColor('RED')
    .setFooter(message.author.username + "#" + message.author.discriminator + " tarafınan #" + message.channel.name + " kanalında", message.author.avatarURL)
    .setAuthor('Mesaj Silme')
    .addField('Silinen Mesaj:', message.content)
    ).catch(e => { return false; })
  
}