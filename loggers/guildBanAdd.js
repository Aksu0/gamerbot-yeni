module.exports = (user, Discord, webhook) => {

    webhook.send("**" + user.tag + "** adlı kullanıcı sunucudan **yasaklanmıştır**").catch(() => { return false; })
  
}