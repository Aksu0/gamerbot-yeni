const db = require('quick.db')
const Discord = require('discord.js')

module.exports = client => {
  
client.on('messageDelete', message => {
if (!message.guild) return;
if (message.author.bot) return;
const webb = db.fetch(`sunucular.${message.guild.id}.modlog`)
if(!webb) return;
var web = JSON.parse(webb)
let webhook = new Discord.WebhookClient(web.id, web.token)
try {
require("./messageDelete.js")(message, Discord, webhook)
} catch(e) { return; }
})

client.on("guildMemberUpdate", (oldMember, newMember) => {
const webb = db.fetch(`sunucular.${oldMember.guild.id}.modlog`)
if(!webb) return;
var web = JSON.parse(webb)
const webhook = new Discord.WebhookClient(web.id, web.token)
try{
require("./guildMemberUpdate.js")(oldMember, newMember, Discord, webhook)
} catch(e) { return; }
  
})

client.on("roleUpdate", (oldRole, newRole) => {
const webb = db.fetch(`sunucular.${newRole.guild.id}.modlog`)
if(!webb) return;
var web = JSON.parse(webb)
const webhook = new Discord.WebhookClient(web.id, web.token)

require("./roleUpdate.js")(oldRole, newRole, Discord, webhook)

})

client.on('messageDeleteBulk', messages => {

const webb = db.fetch(`sunucular.${messages.first().guild.id}.modlog`)
if(!webb) return;
var web = JSON.parse(webb)
const webhook = new Discord.WebhookClient(web.id, web.token)

require("./messageDeleteBulk.js")(messages, Discord, webhook)

})

client.on('messageUpdate', (oldMessage, newMessage) => {
if (oldMessage.author.bot) return false; 
if (!oldMessage.guild) return false; 
if (oldMessage.content === newMessage.content) return false; 
const webb = db.fetch(`sunucular.${newMessage.guild.id}.modlog`)
if(!webb) return;
var web = JSON.parse(webb)
const webhook = new Discord.WebhookClient(web.id, web.token)

require("./messageUpdate.js")(newMessage, oldMessage, Discord, webhook)

})

client.on('channelCreate', async channel => {
const webb = db.fetch(`sunucular.${channel.guild.id}.modlog`)
if(!webb) return;
var web = JSON.parse(webb)
const webhook = new Discord.WebhookClient(web.id, web.token)

require("./channelCreate.js")(channel, Discord, webhook)

})
    
client.on('channelDelete', async channel => {
const webb = db.fetch(`sunucular.${channel.guild.id}.modlog`)
if(!webb) return;
var web = JSON.parse(webb)
const webhook = new Discord.WebhookClient(web.id, web.token)
    
require("./channelDelete.js")(channel, Discord, webhook)

})
  
client.on('roleCreate', async role => {
const webb = db.fetch(`sunucular.${role.guild.id}.modlog`)
if(!webb) return;
var web = JSON.parse(webb)
const webhook = new Discord.WebhookClient(web.id, web.token)
    
require("./roleCreate.js")(role, Discord, webhook)

})

client.on('roleDelete', async role => {
const webb = db.fetch(`sunucular.${role.guild.id}.modlog`)
if(!webb) return;
var web = JSON.parse(webb)
const webhook = new Discord.WebhookClient(web.id, web.token)
    
require("./roleDelete.js")(role, Discord, webhook)

})

client.on("guildUpdate", (oldGuild, newGuild) => {
var webb = db.fetch(`sunucular.${newGuild.id}.modlog`)
if(!webb) return;
var web= JSON.parse(webb)
const webhook = new Discord.WebhoooClient(web.id, web.token)

require("./guildUpdate.js")(oldGuild, newGuild, Discord, webhook)

})
  
}