const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => { 
  if (message.author.id != "354409640588607508") return message.reply('Bu Komutu Kullanamazsın !');
  message.channel.send('<a:onay:697032961383596033> **Yayın Başladı** <a:onay:697032961383596033> https://dlive.tv/Eskimonarsi @everyone ').then(message => {
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yayın1', 'yayın1', 'check'],
  permLevel: 0
};

exports.help = {
  name: 'yayın1',
  description: 'yayın1',
  usage: 'yayın1'
};