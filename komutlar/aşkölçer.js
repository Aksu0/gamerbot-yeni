const Discord = require('discord.js')
var request = require('request')  

exports.run = async (client, message, args, dil, renk, dbl) => {
dbl.hasVoted(message.author.id).then(v => {
  if(!v && message.author.id !== "495825025207894016") return message.channel.send("DBL Üzeri Oy Tespit Edilemedi. Oylamak için https://discordbots.org/bot/" + client.user.id + "/vote")
var { createCanvas, loadImage } = require('canvas')
var canvas = createCanvas(1000,200)
var ctx = canvas.getContext('2d');
var u = message.mentions.users.first()
if(!u) return message.channel.send(':warning: | Kiminle aşıknı  test edeceksin?')
request('https://simsekapi.cf/9F2oVMgUUM/askolcer', async function (error, response, body) {
    if (!error) {
        var genel = JSON.parse(body);
        var aseviye = genel.askseviyesi
      //  message.channel.send(genel.emoji, {code: "xl"})
        var e = genel.emoji.replace("♥","❤").replace("🖤", null)
loadImage(u.displayAvatarURL).then((avatar) => {
loadImage(message.author.displayAvatarURL).then((avatar1) => {
      
ctx.drawImage(avatar, 750, 0, 200, 200);
          
ctx.drawImage(avatar1, 0, 0, 200, 200);
      
ctx.beginPath()
ctx.fillStyle = `#fcfdff`;
ctx.font = 'bold 28px Helvetica';
ctx.textAlign = "right";
ctx.fillText(`${message.author.username + " & " + u.username}`, 635, 50)
ctx.fillText(`${aseviye}`,500, 150)
//ctx.fillText(`${e}`, 620, 150)
    
message.channel.send({files:[{attachment:canvas.toBuffer(),name:"gamerbot-aşkölçer.png"}]})
      
})})}})})}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["aşkölçer"],
  permLevel: 0,
  kategori: "Eğlence"
};
exports.help = {
  name: 'aşk-ölçer',
  description: 'Etiketlediğiniz kullanıcıyla aranızdaki aşkı gösterir',
  usage: 'aşkölçer <@üye>'
};