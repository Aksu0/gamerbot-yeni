const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');
const { stripIndents } = require('common-tags');
const snekfetch = require("snekfetch");

exports.run = async (client, msg, args) => {
  const message = msg
  let u = msg.mentions.users.first() || msg.author;
  
 var planfoto = db.fetch(`userbg_${u.id}`)
        let plan;
        if (!planfoto) plan = "https://cdn.discordapp.com/attachments/540975380899823616/547126543974006830/images.jpg"
        else plan = planfoto
  

        if(u.bot === true) {
                const embed = new Discord.RichEmbed()
                        .setDescription("Botlar Seviye Kasamazlar xD")
                        .setColor("RANDOM")
                msg.channel.send(embed)
                return
        }
  
  var g = "50"
  
  var { createCanvas, loadImage } = require('canvas')
        var canvas = createCanvas(750,240)
        var ctx = canvas.getContext('2d');
        const avatarURL = u.displayAvatarURL
        const { body } = await request.get(avatarURL);
        const avatar = await loadImage(body);
        loadImage(plan).then((arkabg) => {
  
ctx.drawImage(arkabg, 0, 0, 750, 240);
          
  ctx.fillStyle = "rgba(0, 0, 0, 0."+g+")";
  ctx.fill()
        ctx.fillRect(25, 20, 700, 200)  
  
        var re = "00f00f"
  var xpp;
  var xp = db.fetch(`sunucular.${message.guild.id}.seviye.${message.author.id}.puan`)
  var lvl = db.fetch(`sunucular.${message.guild.id}.seviye.${message.author.id}.seviye`)
  var lvll = db.fetch(`sunucular.${message.guild.id}.seviye.${message.author.id}.seviye`)
  if(!lvl || lvl<0) lvll = 1
    else lvll = lvl
  if(!xp || xp < 0) xpp = 1
    else xpp = xp
  
        let sira = ''
        const sorted = msg.guild.members.filter(u => !u.user.bot).array().sort((a, b) => { return db.fetch(`seviye_${b.user.id}`) - db.fetch(`seviye_${a.user.id}`) });
        const top10 = sorted.splice(0, msg.guild.members.size)
        const mappedID = top10.map(s => s.user.id);
        for(var i = 0; i < msg.guild.members.size; i++) {
                if(mappedID[i] === u.id) {
                        sira += `${i + 1}`
                }
        }
  if(!lvl || lvl<0) lvl = 0
  if(!xp || xp<0) xp = 0
        var de = xpp / (lvll * 150)
        ctx.beginPath()
        ctx.fillStyle = "#999999";
        ctx.arc(257 + 18.5, 125.5 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
        ctx.fill();
        ctx.fillRect(257 + 18.5, 125.5 + 36.15, 400, 37.5);
        ctx.arc(257 + 18.5 + 400, 125.5 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `#${re}`;
        ctx.arc(257 + 18.5, 125.5 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
        ctx.fill();
        ctx.fillRect(257 + 18.5, 125.5 + 36.15, 400 * de, 37.5);
        ctx.arc(257 + 18.5 + 400 * de, 125.5 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
        ctx.fill();
        ctx.fillStyle = `#${re}`;
        ctx.font = '28px Impact';
        ctx.textAlign = "right";
        ctx.fillText(`Seviye ${lvl}`, 670, 70)
        ctx.font = '20px Impact';
        ctx.textAlign = "right";
        ctx.fillText(`${xp} / ${lvll * 150} XP`, 670, 100);
  ctx.fillStyle = `#fcfdff`;
  ctx.font = 'bold 28px Impact';
        ctx.textAlign = "left";
   //     ctx.fillStyle = `#${re}`
        ctx.fillText(`${u.tag}`, 180, 115)
        ctx.beginPath();
        ctx.lineWidth = 10;
  ctx.fill()
        ctx.lineWidth = 10;
        ctx.arc(43 + 67, 67 + 67, 67, 0, 2 * Math.PI, true);
    ctx.clip();
    ctx.drawImage(avatar, 43, 67, 135, 130)
    
        msg.channel.send({files:[{attachment:canvas.toBuffer(),name:"gamerbot-seviye.png"}]})
  
})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Seviye"
};

exports.help = {
  name: 'seviye',
  description: '',
  usage: ''
};