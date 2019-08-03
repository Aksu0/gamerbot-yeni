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
  if(!args[0]) return message.channel.send(':warning: | Atacağın kişiyi belirtmelisin!')    
  message.guild.members.forEach(a => {
  if(a.user.username.toLowerCase().match(args[0])) user = a.user
  else if(a.user.username.toUpperCase().match(args[0])) user = a.user
  else if(a.user.username.match(args[0])) user = a.user
  })
  }
    let reason = args.slice(1).join(' ');
  
  if (!user) return message.channel.send(':warning: | Atacağın kişiyi belirtmelisin!')
  else if (!reason) reason = "Belirtilmemiş"
  if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send(':warning: | `Üyeleri At` Yetkim Gerekiyor!')
  else if (!message.guild.member(user).bannable) return message.channel.send(':warning: | Bu Kullanıcınını Rolü Benden Yüksekte!')
 
  message.channel.send(`**${user.tag}** adlı kullanıcıyı \`\`\`${reason}\`\`\` adlı sebepten dolayı atmak için onay yaz! 10 saniye sonra iptal edilecektir`)
    message.channel.awaitMessages(response => response.content === 'onay' && response.author.id === message.author.id, {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
    message.react('✅')
  user.send(message.guild.name + " adlı sunucudan **" + message.author.tag + "** adlı yetkili tarafınan ```" + reason + "``` sebebi ile atılınız!")
  message.guild.member(user).kick( reason + " || " + message.author.tag)
  modlog.send(new Discord.RichEmbed()
    .setColor("#e3df28")
   	.setFooter('Atılma Tarihi')
    .setTimestamp()
    .setAuthor('Atılma')
    .addField('Atılan Kullanıcı:', `${user.tag} (${user.id})`)
    .addField('Atan Yetkili:', `${message.author.tag} (${message.author.id})`)
    .addField('Atma Sebebi:', reason)
    );
}).catch(() => message.channel.send('10 saniye doldu. Cevap verilmediği için üye atılmadı') );
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick'],
  permLevel: 2,
  kategori: "Moderasyon"
};

exports.help = {
  name: 'at',
  description: 'Belirttiğiniz kullanıcıyı atarsınız',
  usage: 'at <üye> [sebep]'
};