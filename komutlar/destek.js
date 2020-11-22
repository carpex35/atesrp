const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('<@&696107240398127115>,<@&696107235235069962> Desteğe İhtiyacım Var , İlgilenirmisiniz ?').then(message => {
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt', 'kayıt', 'check'],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'destek',
  usage: 'destek'
};