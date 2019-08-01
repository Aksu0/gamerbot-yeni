const moment = require("moment")
const Discord = require("discord.js");
const dateFormat = require('dateformat');

exports.run = (client, message, args, dil, renk) => {
  var member;
  if(message.mentions.members.first()) member = message.mentions.members.first()
  else if(args[0]) {
  if(message.guild.members.find(t => t.name.includes(args[0]))) member = message.guild.members.find(t => t.name.includes(args[0])) 
  } else member = message.member

  var user = member.user
  
    const kayitms = new Date().getTime() - user.createdAt.getTime();
    const olusturma = moment(member.user.createdAt).format('DD/MM/YYYY') + "\n" + moment.duration(kayitms).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    const girisms = new Date().getTime() - member.joinedAt.getTime();
    const giris = moment.duration(girisms).format("Y [yıl], M [ay], D [gün], H [saat], m [dakika], s [saniye]")

    var durum;
    if(user.presence.status === "dnd") durum = '<:Rahatsizetme:521053260015075339> Rahatsız Etmeyin'
    else if(user.presence.status === "online") durum = '<:cevrimici:504229361801625600> Çevrimiçi'
    else if(user.presence.status === "idle") durum = "<:bosta:504229361453629452> Boşta"
    else durum = "<:Cevrimdisi:521053260208013343> Çevrimdışı"

    
    message.channel.send(new Discord.RichEmbed()
      .setColor(renk)
      .setAuthor(user.tag, user.displayAvatarURL)
      .setThumbnail(user.displayAvatarURL)
      .addField("Şu anda yaptığı;", user.presence.game ? user.presence.game.name : 'Şu anda bir şey yapmıyor.', true) 
      .addField('Kullanıcı Durumu:', `${durum}`)
      .addField('Sunucuya katılma tarihi', `${giris}`, true)
      .addField('Hesap oluşturulma tarihi', `${olusturma}`, true)
      .setFooter(dil.footer)
    );
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcıbilgi','kbilgi', 'kb'],  
  permLevel: 0,
  kategori: "Kullanıcı"
};

exports.help = {
  name: 'kullanıcı',
  description: 'İstediğiniz kişinin bilgisini gösterir.',
  usage: 'kullanıcıbilgi'
};