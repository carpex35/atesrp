const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.delete() 
  if (message.author.id != "292710173548609546") return message.reply('Bu Komutu Kullanamazsın !');
  message.channel.send('<a:onay:697032961383596033> **Yayın Başladı** <a:onay:697032961383596033> https://dlive.tv/xdazzle @everyone ').then(message => {
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yayın', 'yayın', 'check'],
  permLevel: 0
};

exports.help = {
  name: 'yayın',
  description: 'yayın',
  usage: 'yayın'
};