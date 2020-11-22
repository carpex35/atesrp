const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send('Bizim tavuğumuza kimse kışt diyemez https://cdn.discordapp.com/attachments/671135786149609477/697132495610839181/tenor.gif @everyone ').then(message => {
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım', 'bakım', 'check'],
  permLevel: 3
};

exports.help = {
  name: 'bakım',
  description: 'bakım',
  usage: 'bakım'
};