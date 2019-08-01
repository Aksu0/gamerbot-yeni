const Discord = require('discord.js')
const db = require('quick.db')
var tokenuyari = "Benim Hiç Tokenim Olmadı Abi"
const ayarlar = require('../ayarlar.json')
const moment = require("moment");
require("moment-duration-format");
var request = require('request')

exports.run = async (client, message, args, dil, renk) => {

  message.channel.send("<a:yukleniyor:593075459835691013> Ölçülüyor").then(m => {
    m.edit(dil.yazılar.gecikme + ":** " + client.ping + "ms**" + `  Mesaj gecikmesi: **${new Date().getTime() -  m.createdAt}ms**`)
  })

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "Bot"
};
exports.help = {
  name: 'ping',
  description: 'Bot Pingini Gösterir',
  usage: 'ping'
};