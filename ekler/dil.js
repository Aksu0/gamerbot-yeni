const db = require('quick.db')

module.exports = function (message, command, prefix) {
  let dil = db.fetch(`sunucular.${message.guild.id}.dil`)
  let yazılar, footer, doğrukullanım, hata;
  if(!dil) dil = "tr"
  if(dil === "tr") {
    yazılar = require('./diller/tr.json')
    footer = `${message.author.tag} tarafından istendi`
    doğrukullanım = `Hatalı Kullanım! Doğru Kullanıma Bakmak için ${prefix}yardım ${command}`
    hata = `Bir Hata Oluştu! Oluşan Hata: `
  } else if(dil === "en") {
    yazılar = require('./diller/en.json')
    footer = `Requested by ${message.author.tag}`
    doğrukullanım = `Wrong Usage! For Correct Usage: ${prefix}help ${command}`
    hata = `Error! Err: `
  }
  return {
    yazılar,
    footer,
    doğrukullanım,
    hata
  }
}