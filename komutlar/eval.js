const Discord = require('discord.js')
const db = require('quick.db')
var tokenuyari = "Benim Hiç Tokenim Olmadı Abi"

exports.run = async (client, message, args, dil, renk) => {
  if(!args[0]) return message.channel.send(dil.doğrukullanım)

    const code = args.slice(0).join(' ');
    if(code.match("client.token") || code.match("ayarlar.token")) return;
  
    function clean(text) {
        if (typeof text !== 'string')
            text = require('util').inspect(text, { depth: 0 })
        text = text
            .replace(/`/g, '`' + String.fromCharCode(8203))
            .replace(/@/g, '@' + String.fromCharCode(8203))
        return text;
    };

    var evalEmbed = ""
    try {
        var evaled = clean(eval(code));
        if (evaled.constructor.name === 'Promise') evalEmbed = `\`\`\`\n${evaled}\n\`\`\``
        else evalEmbed = `\`\`\`js\n${evaled}\n\`\`\``
        
        message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
    } catch (err) {
        message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['eval','evsat'],
    permLevel: 6,
    kategori: "Sahip"
}

exports.help = {
    name: 'kod',
    description: 'Yazılan kodu çalıştırır.',
    usage: 'kod <kod>'
}