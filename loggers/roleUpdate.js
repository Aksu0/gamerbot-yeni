module.exports = (oldRole, newRole, Discord, webhook) => {

if(oldRole.name !== newRole.name) {
webhook.send(`**${oldRole.name}** adlı rolün ismi **${newRole.name}** olarak güncellenmiştir`)
} 
if(oldRole.color !== newRole.color) {
webhook.send(`**${newRole.name}** adlı rolün rengi #**${newRole.color}** olarak güncellenmiştir`)
} 
if(!oldRole.hoist && newRole.hoist) {
webhook.send(`**${newRole.name}** adlı rol artık diğer rollerden **ayrı gösteriliyor**`)
}
if(oldRole.hoist && !newRole.hoist) {
webhook.send(`**${newRole.name}** adlı rol artık diğer rollerden **ayrı gösterilmiyor**`)
}
if(!oldRole.mentionable && newRole.mentionable) {
webhook.send(`**${newRole.name}** adlı rol artık **bahsedilebilir**`)
} 
if(oldRole.mentionable && !newRole.mentionable) {
webhook.send(`**${newRole.name}** adlı rol artık **bahsedilebemez**`)
}
  
}