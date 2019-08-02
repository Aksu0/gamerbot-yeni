const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix
var zaman = "[" + moment().format('DD/MM/YYYY HH:mm') + "] >>"

module.exports = client => {

client.user.setActivity('g!girişçıkış => Resimli giriş çıkış gelmiştir!')
  
  console.log(`${zaman} ${client.user.username} ismi ile giriş yapıldı!`);
  console.log(`${zaman} Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  console.log(`${zaman} Şu an ` + client.ping + ` Gecikmeyle Hizmet Veriyor!`);
  
};