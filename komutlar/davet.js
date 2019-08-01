exports.run = function(client, message, args) {
client.generateInvite(8).then(anan => {
message.channel.send('Beni davet etmek için: '+ anan)

})}

exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: ['invite'],
    permLevel: 0,
    kategori: "Bot"
  };
  
  exports.help = {
    name: 'davet', 
    description: 'Botu Sunucunuza Eklersiniz',
    usage: 'davet'
  };