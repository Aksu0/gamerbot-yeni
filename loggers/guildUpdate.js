module.exports = (oldGuild, newGuild, Discord, webhook) => {

if(newGuild.name !== oldGuild.name) {
webhook.send(`Sunucu ismi düzenlenmiştir.\nEski isim: **${oldGuild.name}**\n\nYeni isim: **${newGuild.name}**`)
}

if(newGuild.region !== oldGuild.region) {
webhook.send(`Sunucu bölgesi düzenlenmiştir.\nEski bölge: **${oldGuild.region}**\n\nYeni Bölge: **${newGuild.regoin}**`)
}

}