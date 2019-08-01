const Discord = require("discord.js");
var Jimp = require('jimp');

var işliyormesaj = `:timer: | Fotoğraf işleniyor, lütfen bekleyin.`
var sure = 1000
var kullanılabilecekyazı = "`atatürkçerçeve`,`hacked`,`afewmoments`,`azeri`,`balance`,`brilliance`,`bravery`,`bughunter`,`nitro`,`partner`,`staff`,`wasted`,`trinity`,`ateş`"

exports.run = async (client, message, args, dil, renk, dbl) => {
var user;
if(message.mentions.users.first()) user = message.mentions.users.first()
else user = message.author
dbl.hasVoted(message.author.id).then(v => {
  if(!v) return message.channel.send("DBL Üzeri Oy Tespit Edilemedi. Oylamak için https://discordbots.org/bot/" + client.user.id + "/vote")
	   
if(!args[0]) return message.channel.send(":x: | Lütfen Kullanılabilir bir efekt giriniz!\n**Kullanılabilecek Efektler: **" + kullanılabilecekyazı)

if(args[0] === "atatürkçerçeve") {
    message.channel.send(işliyormesaj).then(m => m.delete(sure));

    Jimp.read(user.avatarURL, (err, image) => {
        image.resize(315, 310)
        Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=ataturk&url=https://api.eggsybot.xyz/pub/resources/frames/ataturk.png", (err, avatar) => {
            avatar.resize(315, 320)
            image.composite(avatar, 0, 0).write(`./img/atatürkçerçeve/${user.id}.png`);
            setTimeout(function() {
                message.channel.send(new Discord.Attachment(`./img/atatürkçerçeve/${user.id}.png`));
            }, 1000);
        });
    
    });
} else if(args[0] === "hacked") {
    message.channel.send(işliyormesaj).then(m => m.delete(sure));

    Jimp.read(user.avatarURL, (err, image) => {
        image.resize(315, 310)
        Jimp.read("https://cdn.glitch.com/bddb906b-1c32-4abe-b698-c698c3664c98%2Fmaxresdefault-1.png?1545421851306", (err, avatar) => {
            avatar.resize(315, 320)
            image.composite(avatar, 0, 0).write(`./img/hacked/${user.id}.png`);
            setTimeout(function() {
                message.channel.send(new Discord.Attachment(`./img/hacked/${user.id}.png`));
            }, 1000);
        });
    
    });
} else if(args[0] === "afewmoments") {
        message.channel.send(işliyormesaj).then(m => m.delete(sure));
    
        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
        
            Jimp.read("https://i.ytimg.com/vi/-2Z0Y3Kk8nU/maxresdefault.jpg", (err, avatar) => {
                avatar.resize(295, 295)
                avatar.opacity(0.2);
                image.composite(avatar, 1, 0).write(`./img/afewmoments/${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/afewmoments/${user.id}.png`));
                }, 1000);
            });
        });
} else if(args[0] === "azeri") {
    message.channel.send(işliyormesaj).then(m => m.delete(sure));

    Jimp.read(user.avatarURL, (err, image) => {
        image.resize(315, 310)
        Jimp.read("https://i.imgur.com/3CEbrNr.png", (err, avatar) => {
            avatar.resize(315, 320)
            image.composite(avatar, 0, 0).write(`./img/azeri/${user.id}.png`);
            setTimeout(function() {
                message.channel.send(new Discord.Attachment(`./img/azeri/${user.id}.png`));
            }, 1000);
        });
    
    });
} else if(args[0] === "balance") {
    message.channel.send(işliyormesaj).then(m => m.delete(sure));

    Jimp.read(user.avatarURL, (err, image) => {
        image.resize(315, 310)
        Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=balance&url=https://api.eggsybot.xyz/pub/resources/frames/balance.png", (err, avatar) => {
            avatar.resize(315, 320)
            image.composite(avatar, 0, 0).write(`./img/balance/${user.id}.png`);
            setTimeout(function() {
                message.channel.send(new Discord.Attachment(`./img/balance/${user.id}.png`));
            }, 1000);
        });
    
    });
} else if(args[0] === "brilliance") {
    message.channel.send(işliyormesaj).then(m => m.delete(sure));

    Jimp.read(user.avatarURL, (err, image) => {
        image.resize(315, 310)
        Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=brilliance&url=https://api.eggsybot.xyz/pub/resources/frames/brilliance.png", (err, avatar) => {
            avatar.resize(315, 320)
            image.composite(avatar, 0, 0).write(`./img/brilliance/${user.id}.png`);
            setTimeout(function() {
                message.channel.send(new Discord.Attachment(`./img/brilliance/${user.id}.png`));
            }, 1000);
        });
    
    });
    
} else if(args[0] === "bravery") {
    message.channel.send(işliyormesaj).then(m => m.delete(sure));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=bravery&url=https://api.eggsybot.xyz/pub/resources/frames/bravery.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./img/bravery/${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/bravery/${user.id}.png`));
        }, 1000);
    });

});

} else if(args[0] === "bughunter") {
    message.channel.send(işliyormesaj).then(m => m.delete(sure));

    Jimp.read(user.avatarURL, (err, image) => {
        image.resize(295, 295)
    
        Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=bug%20hunter&url=https://api.eggsybot.xyz/pub/resources/frames/bug%20hunter.png", (err, avatar) => {
            avatar.resize(295, 295)
            avatar.opacity(1);
            image.composite(avatar, 1, 0).write(`./img/bughunter/${user.id}.png`);
            setTimeout(function() {
                message.channel.send(new Discord.Attachment(`./img/bughunter/${user.id}.png`));
            }, 1000);
        });
    });
    
} else if(args[0] === "nitro") {
    message.channel.send(işliyormesaj).then(m => m.delete(sure));

    Jimp.read(user.avatarURL, (err, image) => {
        image.resize(315, 310)
        Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=nitro&url=https://api.eggsybot.xyz/pub/resources/frames/nitro.png", (err, avatar) => {
            avatar.resize(315, 320)
            image.composite(avatar, 0, 0).write(`./img/nitro/${user.id}.png`);
            setTimeout(function() {
                message.channel.send(new Discord.Attachment(`./img/nitro/${user.id}.png`));
            }, 1000);
        });
    
    });
} else if(args[0] === "partner") {
    message.channel.send(işliyormesaj).then(m => m.delete(sure));

    Jimp.read(user.avatarURL, (err, image) => {
        image.resize(295, 295)
    
        Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=partner&url=https://api.eggsybot.xyz/pub/resources/frames/partner.png", (err, avatar) => {
            avatar.resize(295, 295)
            avatar.opacity(1);
            image.composite(avatar, 1, 0).write(`./img/partner/${user.id}.png`);
            setTimeout(function() {
                message.channel.send(new Discord.Attachment(`./img/partner/${user.id}.png`));
            }, 1000);
        });
    });
    
} else if(args[0] === "staff") {
    message.channel.send(işliyormesaj).then(m => m.delete(sure));

    Jimp.read(user.avatarURL, (err, image) => {
        image.resize(295, 295)
    
        Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=staff&url=https://api.eggsybot.xyz/pub/resources/frames/staff.png", (err, avatar) => {
            avatar.resize(295, 295)
            avatar.opacity(1);
            image.composite(avatar, 1, 0).write(`./img/staff/${user.id}.png`);
            setTimeout(function() {
                message.channel.send(new Discord.Attachment(`./img/staff/${user.id}.png`));
            }, 1000);
        });
    });
} else if(args[0] === "wasted") {
    message.channel.send(işliyormesaj).then(m => m.delete(sure));
    Jimp.read(user.avatarURL, (err, image) => {
        image.resize(295, 295)
        image.greyscale()
        image.gaussian(3)
        Jimp.read("https://cdn.glitch.com/b18a2fa6-68cb-49d5-9818-64c50dd0fdab%2F1.png?1529363616039", (err, avatar) => {
            avatar.resize(295, 295)
            image.composite(avatar, 4, 0).write(`./img/wasted/${user.id}.png`);
            setTimeout(function() {
                message.channel.send(new Discord.Attachment(`./img/wasted/${user.id}.png`));
            }, 1000);
})})
} else if(args[0] === "trinity") {
    message.channel.send(işliyormesaj).then(m => m.delete(sure));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
        
            Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=trinity&url=https://api.eggsybot.xyz/pub/resources/frames/trinity.png", (err, avatar) => {
                avatar.resize(295, 295)
                avatar.opacity(1);
                image.composite(avatar, 1, 0).write(`./img/trinity/${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/trinity/${user.id}.png`));
                }, 1000);
            });
        });
} else if(args[0] === "ateş") {
    message.channel.send(işliyormesaj).then(m => m.delete(sure));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://avatanplus.com/files/resources/original/5a0f28bea614115fcb3728d8.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./img/ateş/${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/ateş/${user.id}.png`));
        }, 1000);
    });

});
} else return message.channel.send(":x: | Lütfen Kullanılabilir bir efekt giriniz!\n**Kullanılabilecek Efektler: **" + kullanılabilecekyazı)
     setTimeout(function() {
            require('fs').unlink(`./img/${args[0]}/${user.id}.png`);
        }, 10000);
})}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["efekt"],
    permLevel: 0,
   kategori: "Fotoğraf"
  };
  
  exports.help = {
    name: 'avatar-efekt',
    description: 'Avatarına Çeşitli Efektler Eklersiniz!',
    usage: 'avatar-efekt <efekt>'
  };