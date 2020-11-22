const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('<@&696107238787645563>,<@&696107239722844190>,<@&696872920860852296>,<@&696107236786831391> https://gph.is/g/ZlQLNpK').then(message => {
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt', 'kayıt', 'check'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt',
  description: 'kayıt',
  usage: 'kayıt'
};