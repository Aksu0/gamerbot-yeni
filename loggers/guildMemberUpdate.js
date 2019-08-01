module.exports = (oldMember, newMember, Discord, webhook) => {


if(oldMember.nickname !== newMember.nickname) {
var onickname,nnickname;
if(!oldMember.nickname) onickname = oldMember.user.username
else onickname = oldMember.nickname
if(!newMember.nickname) nnickname = oldMember.user.username
else nnickname = newMember.nickname
  webhook.send(new Discord.RichEmbed()
.setColor("#1eef81")
.setAuthor("Kullanıcı ismi değiştirme")
.addField("Önceki isim",onickname)
.addField("Şimdiki isim",nnickname)
)
} else if(oldMember.roles.size !== newMember.roles.size) {
  var or = []
  var eklenen;
  var silinen;
  oldMember.roles.forEach(a => or.push(a))
  newMember.roles.forEach(a => {
    if(!or.includes(a)) eklenen = a;
    else {
    or.forEach(aa => {
      if(aa !== a) silinen = aa
    })
    } 
  })
  if(eklenen) return webhook.send(`**` + newMember.user.tag + `** adlı kullanıcıya **${eklenen.name}** adlı rol verilmiştir`)
  else return webhook.send(`**` + newMember.user.tag + `** adlı kullanıcıdan **${silinen.name}** adlı rol alınmıştır`)
}

  
}