const Discord = require('discord.js')
const db = require('quick.db')
var tokenuyari = "Benim Hiç Tokenim Olmadı Abi"
const ayarlar = require('../ayarlar.json')
const moment = require("moment");
require("moment-duration-format");
var request = require('request')

exports.run = async (client, message, args, dil, renk, dbl) => {
dbl.hasVoted(message.author.id).then(v => {
  if(!v) return message.channel.send("DBL Üzeri Oy Tespit Edilemedi. Oylamak için https://discordbots.org/bot/" + client.user.id + "/vote")
var şark = args.slice(0).join(" ")
if(!şark) return message.reply('Hangi Şarkının Sözlerini Bulacaksınız?')
request('https://simsekapi.cf/9F2oVMgUUM/ssozu/'+ encodeURIComponent(şark), async function (error, response, body) {
    if (!error) {
        var genel = JSON.parse(body);
  
message.channel.send(new Discord.RichEmbed()
                    .setTitle(genel.title.replace("by", "-"))
                    .setDescription(genel.lyrics.substring(0, 1900)+"...[devamı](" + genel.links.genius +")")
                    .setThumbnail(genel.thumbnail.genius)
                    .setColor(renk)
                    )
}})})}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["şs","şarkısözü"],
  permLevel: 0,
  kategori: "Müzik"
};
exports.help = {
  name: 'şarkı',
  description: 'Aradığınız Şarkının Şarkı Sözlerini Gösterir',
  usage: 'şarkı <isim>'
};