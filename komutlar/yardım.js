const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args, dil, renk, dbl) => {
  var prefix = db.get(`sunucular.${message.guild.id}.prefix`)
  if(!prefix) prefix = "g!"
  var kategoriler = []
  client.commands.forEach(a => {
    if(a.conf.kategori === "Sahip") return;
    if(!kategoriler.includes(a.conf.kategori)) return kategoriler.push(a.conf.kategori)
  })
  var cat = args[0]
  if(!cat) return message.channel.send('```xl\n' + dil.yazılar.yardım.kategoriler + ':\n\n'+ prefix + dil.yazılar.yardım.yardım + kategoriler.join("\n" + prefix +  dil.yazılar.yardım.yardım).toLowerCase() + "\n\n" + dil.yazılar.yardım.komutsayısı+ client.commands.size +"```")
 
  
  if(kategoriler.some(a => cat.toLowerCase() === a.toLowerCase())) {
    message.channel.send(new Discord.RichEmbed()
                         .addField(cat + dil.yazılar.yardım.caty, client.commands.filter(bokmert=> bokmert.conf.kategori.toLowerCase() === cat).map(cmd => ` ${cmd.help.name} `).join(", "))
                         .setColor(renk)
                         )
 
  
  } else if(client.commands.has(cat) || client.aliases.has(cat)) {
    var command;
     if(client.commands.has(cat)) command =  client.commands.get(cat)
     else if(client.aliases.has(cat)) command = client.commands.get(client.aliases.get(cat))
    
    var aliases;
    if(command.conf.aliases.length === 0) aliases = "Alternatif bulunmuyor"
    else aliases = command.conf.aliases.toString()
    
    message.channel.send(new Discord.RichEmbed()
                         .setAuthor(cat + dil.yazılar.yardım.komutyardımı)
                         .addField(dil.yazılar.yardım.komutisim, command.help.name)
                         .addField(dil.yazılar.yardım.kısaltma, aliases)
                         .addField(dil.yazılar.yardım.kategori, command.conf.kategori)
                         .addField(dil.yazılar.yardım.yetkii, command.conf.permLevel.toString()
                                   .replace("0", dil.yazılar.yardım.yetki.herkes)
                                   .replace("1", dil.yazılar.yardım.yetki.mesajy)
                                   .replace("2", dil.yazılar.yardım.yetki.at)
                                   .replace("3", dil.yazılar.yardım.yetki.yasakla)
                                   .replace("4", dil.yazılar.yardım.yetki.syönet)
                                   .replace("5",dil.yazılar.yardım.yetki.yönetici)
                                   .replace("6", dil.yazılar.yardım.yetki.sahip)
                                  )
                         .addField(dil.yazılar.yardım.açıklama, command.help.description)
                         .addField(dil.yazılar.yardım.kullanım, command.help.usage)
                         .setColor(renk)
  )
} else { message.channel.send(dil.yazılar.yardım.bulunamadı) }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["y","help","h"],
  permLevel: 0,
  kategori: "Bot"
};
exports.help = {
  name: 'yardım',
  description: 'Bot Komutlarını Gösterir',
  usage: 'yardım [kategori/komut]'
};