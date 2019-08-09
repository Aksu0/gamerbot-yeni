module.exports = (user, Discord, webhook) => {

    webhook.send("**" + user.tag + "** adlı kullanıcının **yasaklanması kaldırılmıştır**").catch(() => { return false; })
  
}