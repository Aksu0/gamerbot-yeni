const Discord = require('discord.js');

exports.run = async(client, message, args, dil) => {
if(!args[0]) return message.channel.send(dil.doğrukullanım)
			let deleteCount = parseInt(args[0]);
			if ( deleteCount > 1000 ) deleteCount = 1000;
			const loopCount = Math.ceil(deleteCount/100);
			let lastCount = deleteCount % 100;
      var timeout = [];
			for ( let i = 0; i < loopCount; i++ ) {
				let messageCount = 10000;
				if ( (i+1) === loopCount && lastCount > 0 ) {
					messageCount = lastCount;
				}

				timeout[i] = setTimeout(function () {
						sil(messageCount, i+1);
				}, 10000 * 3 * (i+1));

			}
			async function sil(messageCount, lst) {
				const fetched = await message.channel.fetchMessages({ limit: messageCount, before: message.id });
        if ( fetched.array().length === 0 ) {
          for ( let i = 0; i < timeout.length; i++ ) {
            clearTimeout( timeout[i] );
          }
          message.delete();
        }
        
				message.channel.bulkDelete(fetched);
				total = total+fetched.array().length;
				message.channel.send(total+" adet mesaj silindi");
				if ( lst === loopCount ) {
          message.delete();
					return message.channel.send( total + " adet mesaj silindi." );
				}
			}
		}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sil"],
  permLevel: 3,
  kategori: "Moderasyon"
};

exports.help = {
  name: 'temizle',
  description: 'Mesajları temizler',
  usage: 'temizle [1/1000]',
};