exports.run = (client, message, args, dil) => {
    let tür = args[0]
    let kanal = args.slice(1).join(' ');
    if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send("`Kanalları Yönet` yetkim bulunmalıdır")
    if(!tür) return message.channel.send(dil.doğrukullanım);
    if(!kanal) return message.channel.send(dil.doğrukullanım);

  message.react('✅')
  message.guild.createChannel(kanal, tür);
  message.channel.send(":white_check_mark: | " + kanal + " isimli bir kanal oluşturuldu");
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kanalaç'],
  permLevel: 3,
  kategori: "Moderasyon"
};

exports.help = {
  name: 'kanal-aç',
  description: 'Türünü kendiniz belirlediğiniz bir kanal açar',
  usage: 'kanalaç <yazı/kategori/ses> <isim>'
};
