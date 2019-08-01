const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {
   const webb = db.fetch(`sunucular.${message.guild.id}.modlog`)
    if(!webb) return message.channel.send(':warning: | Kayıt kanalı ayarlanmamış! ')
   var web = JSON.parse(webb)
   const modlog = new Discord.WebhookClient(web.id, web.token)
  
  let user;
  if(message.mentions.users.first()) user = message.mentions.users.first()
  else {
  if(!args[0]) return message.channel.send(':warning: | Yasaklayacağın kişiyi belirtmelisin!')    
  message.guild.members.forEach(a => {
  if(a.user.username.toLowerCase().match(args[0])) user = a.user
  else if(a.user.username.toUpperCase().match(args[0])) user = a.user
  else if(a.user.username.match(args[0])) user = a.user
  })
  }
  let reason = args.slice(1).join(' ');
  
  if (!user) return message.channel.send(':warning: | Yasaklayacağın Kişiyi Etiketlemelisin!')
  if (!reason) reason = "Belirtilmemiş"
  
  if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(':warning: | `Üyeleri Yasakla` Yetkim Gerekiyor!')
  else if (!message.guild.member(user).bannable) return message.channel.send(':warning: | Bu Kullanıcınını Rolü Benden Yüksekte!')
 
  const filter = m => m.content === 'onay' && m.author.id === message.author.id
  
  message.channel.send(`**${user.tag}** adlı kullanıcıyı \`\`\`${reason}\`\`\` adlı sebepten dolayı yasaklamak için onay yaz! 10 saniye sonra iptal edilecektir`)
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
  message.react('✅')
  
  user.send(message.guild.name + " adlı sunucuda **" + message.author.tag + "** adlı yetkili tarafınan ```" + reason + "``` sebebi ile yasaklandınız!")
  message.guild.ban(user, reason + " || " + message.author.tag)
  modlog.send(new Discord.RichEmbed()
    .setColor("RED")
  	.setFooter('Yasaklanma Tarihi')
    .setTimestamp()
    .setAuthor('Yasaklama')
    .addField('Yasaklanan Kullanıcı:', `${user.tag} (${user.id})`)
    .addField('Yasaklayan Yetkili:', `${message.author.tag} (${message.author.id})`)
    .addField('Yasaklama Sebebi:', reason)
    );
}).catch(e => {
    if(e) return message.channel.send('10 saniye doldu. Cevap verilmediği için üye yasaklanmadı')
    });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 2,
  kategori: "Moderasyon"
};

exports.help = {
  name: 'yasakla',
  description: 'Bir üyeyi yasaklarsınız!',
  usage: 'yasakla <üye> [sebep]'
};