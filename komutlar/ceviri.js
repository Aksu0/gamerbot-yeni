const Discord = require('discord.js')
var request = require('request')

exports.run = async (client, message, args, dil, renk) => {
var dill = args[0]
if(!dill) return message.channel.send(dil.doğrukullanım)
var şark = args.slice(1).join(" ")
if(!şark) return message.channel.send(dil.doğrukullanım)
request('https://simsekapi.cf/9F2oVMgUUM/ceviri?dil='+ encodeURIComponent(dill) + "&metin=" + encodeURIComponent(şark), async function (error, response, body) {
  var genel; 
  if (!error) {
        genel = JSON.parse(body);
    } 
  if(genel.hata) { message.channel.send(dil.doğrukullanım) }
message.channel.send(new Discord.RichEmbed()
                     .setDescription(dil.yazılar.ceviri.mdil + " = " + genel.metindili + " :flag_" + genel.metindilikisa + ":\n" + dil.yazılar.ceviri.çdil + " = " + genel.dil + " :flag_" + genel.dilkisa.toString().replace("en","us") + ":")
                     .addField(dil.yazılar.ceviri.çmetin, genel.cikti)
                     .setFooter(dil.footer)
                     .setColor(renk)
                    )
   
})}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceviri"],
  permLevel: 0,
  kategori: "Kullanıcı"
};
exports.help = {
  name: 'çeviri',
  description: 'Yazdığınız yazıyı yazdığınız dile çevirir',
  usage: 'çeviri <dil (kısaltma)> <yazı>'
};