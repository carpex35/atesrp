const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('<@&696107235235069962>,<@&696107234626895934>,<@&696107236786831391>,<@&696872469759525028> Zarar karşılamaya bakarmısınız').then(message => {
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zarar', 'zarar', 'check'],
  permLevel: 0
};

exports.help = {
  name: 'zarar',
  description: 'zarar',
  usage: 'zarar'
};