const Discord = require("discord.js")

exports.run = function(client, message, args) {
let user;
  if(!args[0]) user = message.author
  else {
  if(message.mentions.users.first()) user = message.mentions.users.first()
  else {
  if(message.guild.members.find(t => t.user.username.toLowerCase().includes(args[0].toLowerCase()))) user = message.guild.members.find(t => t.user.usernane.toLowerCase().match(args[0].toLowerCase())).user
  else user = message.author
}}

//  var user = message.author
message.channel.send(`**${user.tag}** adlı kullanıcının avatarı`, new Discord.Attachment(user.displayAvatarURL, "gamerbot-avatar.png"))

}  

exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: ['pp'],
    permLevel: 0,
    kategori: "Fotoğraf"
  };
  
  exports.help = {
    name: 'avatar', 
    description: 'Belirttiğiniz kullanıcının avatarını gösterir',
    usage: 'avatar [üye]'
  };