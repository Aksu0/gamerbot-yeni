module.exports = (messages, Discord, webhook) => {

var channel = messages.first().channel
webhook.send(`**${channel.name}** adlı kanalda **${messages.size}** adet mesaj toplu olarak silinmiştir`)
  
}