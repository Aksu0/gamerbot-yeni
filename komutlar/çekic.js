const Discord = require('discord.js');

exports.run = async (client, message, args, dil, renk, dbl) => {
dbl.hasVoted(message.author.id).then(v => {
  if(!v) return message.channel.send("DBL Üzeri Oy Tespit Edilemedi. Oylamak için https://discordbots.org/bot/" + client.user.id + "/vote")
  var u;
  if(message.mentions.users.first()) u = message.mentions.users.first()
  else if(args[0]) {
  if(message.guild.members.find(t => t.name.includes(args[0]))) u = message.guild.members.find(t => t.name.includes(args[0])).user
  } else u = message.author
    
  message.channel.send(`${u.tag} ${message.author.tag} sana :hammer: attı! Karşılık Vermeyecek Misin?`);
})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Eğlence"
};

exports.help = {
  name: 'çekiç',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'çekiç [kişi]'
};