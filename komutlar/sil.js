const Discord = require('discord.js');


exports.run = function(client, message, args) {
//Komutun Kodları
  const m = args.join(' ');
  if(!m) return message.channel.send('');
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
  if(m < 2) return message.channel.send('')
 if(m>100) return message.channel.send('')
  message.channel.bulkDelete(m);


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['temizle','delete','sil'],
  permLevel: 4
};

exports.help = {
  name: 'temizle',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100'
}