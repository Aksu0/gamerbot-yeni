const Discord = require('discord.js')
const db = require('quick.db')
var tokenuyari = "Benim Hiç Tokenim Olmadı Abi"
const ayarlar = require('../ayarlar.json')
const moment = require("moment");
require("moment-duration-format");

exports.run = async (client, message, args, dil, renk, dbl) => {
  client.generateInvite(8).then(inv => {
  var b = []
  ayarlar.sahip.forEach(a => b.push(client.users.get(a).tag))
 message.channel.send(new Discord.RichEmbed()
            .addField(dil.yazılar.sahip, b.join("\n"), true)
            .addField(dil.yazılar.uptime, moment.duration(client.uptime).format(`D [${dil.yazılar.gün}], H [${dil.yazılar.saat}], m [${dil.yazılar.dakika}], s [${dil.yazılar.saniye}]`), true)
            .addField(dil.yazılar.koddil, "discord.js", true)
             .addField(dil.yazılar.linkler, "[DBL](https://discordbots.org/bot/" + client.user.id + ") || [Davet](" + inv +")", true)     
             .addField(dil.yazılar.statss, `${dil.yazılar.sunucusay} ${client.guilds.size}\n${dil.yazılar.kullanıcısay} ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() }`, true)     
            .setColor(renk)
            .setFooter(dil.footer, message.author.displayAvatarURL))

  })}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['i'],
    permLevel: 0,
    kategori: "Bot"
}

exports.help = {
    name: 'istatistik',
    description: 'Bot istatistiklerini gösterir',
    usage: 'istatistik'
}