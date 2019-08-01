module.exports = (channel, Discord, webhook) => {

var tür;
if(channel.type === "text") tür = "yazı kanalı"
else if(channel.type === "voice") tür = "ses kanalı"
else if(channel.type === "category") tür = "kategori"

webhook.send(`**${channel.name}** adlı bir **${tür}** oluşturuldu`)
  
}