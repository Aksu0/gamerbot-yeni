const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:',
  	'ü': ':regional_indicator_u:',
  	'ı': ':regional_indicator_i:',
  	'ğ': ':regional_indicator_g:',
    'ö': ':regional_indicator_o:',
   	'ş': ':regional_indicator_s:',
   	'ç': ':regional_indicator_c:',
  	'Ü': ':regional_indicator_u:',
  	'İ': ':regional_indicator_i:',
  	'Ğ': ':regional_indicator_g:',
    'Ö': ':regional_indicator_o:',
   	'Ş': ':regional_indicator_s:',
   	'Ç': ':regional_indicator_c:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

exports.run = async (client, message, args, dil, renk, dbl) => {
dbl.hasVoted(message.author.id).then(v => {
  if(!v) return message.channel.send("DBL Üzeri Oy Tespit Edilemedi. Oylamak için https://discordbots.org/bot/" + client.user.id + "/vote")
var isim = args.join(' ')
if(!isim) return message.channel.send(dil.doğrukullanım)

message.channel.send(
        isim.split('').map(c => mapping[c] || "").join('')
)})}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Eğlence"
};

exports.help = {
  name: 'emojiyazı',
  description: 'Mesajınızı emojiye çevirir.',
  usage: 'emojiyazı <mesaj>'
};