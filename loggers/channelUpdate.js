module.exports = (oldChannel, newChannel, Discord, webhook) => {
  
if(oldChannel.name !== newChannel.name)  {
webhook.send(`**${oldChannel.name}** adlı kanalın ismi **${newChannel.name}** olarak güncellendi`)
}
if(oldChannel.topic !== newChannel.topic)  {
if(newChannel.topic === "null") newChannel.topic = "silindi" 
webhook.send(`**${oldChannel.name}** adlı kanalın başlığı **${newChannel.topic}** olarak güncellendi`)
}
if(!oldChannel.nsfw && newChannel.nsfw)  {
webhook.send(`**${oldChannel.name}** adlı kanal artık **uygunsuz**`)
}
if(oldChannel.nsfw && !newChannel.nsfw)  {
webhook.send(`**${oldChannel.name}** adlı kanal artık **uygunsuz değil**`)
}
  
}
