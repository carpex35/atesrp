const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  var p = 'm!'
  
 const embed = new Discord.RichEmbed()
 .setAuthor(client.user.username, client.user.avatarURL)
 .setTitle('Ayarlar Komutları')
 .setDescription(`:white_small_square: \`${p}giriş-mesaj-ayarla\` = Giriş mesajını değiştirmenizi sağlar. \n:white_small_square: \`${p}giriş-çıkış-ayarla\` = Giriş çıkış kanalını ayarlar. \n:white_small_square: \`${p}çıkış-mesaj-ayarla\` = Çıkış mesajını değiştirmenizi sağlar. \n:white_small_square: \`${p}otorol-ayarla\` = Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar. \n:white_small_square: \`${p}sa-as-sistemi\` =  otomatik Aleyküm Selam Diyer. \n:white_small_square: \`${p}sayaç\` = Sayacı ayarlar. `)
 .setFooter(client.user.username, client.user.avatarURL)
 
 message.channel.send(embed)
  
}
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['ayarlars','settings'],
        permLevel: 4
}
exports.help = {
  name: 'ayarlarkomut',
  description: 'ayarlar Komutlarını Listeler.',
  usage: 'ayarlarkomut'
} 