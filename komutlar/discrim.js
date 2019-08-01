exports.run = function(client, message, args, dil) {
var etiket = args[0]
if(!etiket) etiket = message.author.discriminator
if(isNaN(etiket) || etiket === "0000") { message.channel.send(':warning: | Geçersiz discrim. Lütfen geçerli bir discrim yazınız.') } else {
var a = client.users.filter(t => t.discriminator === etiket)
var c = []
a.forEach(b => c.push(b.tag))
message.channel.send(`**${etiket}** etiketineki ilk 20 kullanıcı:\n\n` + c.slice(0, 10).join("\n"))
}}

exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: [], 
    permLevel: 0,
    kategori: "Kullanıcı"
  };
  
  exports.help = {
    name: 'discrim', 
    description: 'Botun olduğu sunucularda ',
    usage: 'prefix <prefix | sıfırla>'
  };