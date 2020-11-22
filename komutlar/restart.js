const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.delete() 
  message.channel.send('<a:dia5:697032995927752754> 5 Dakika Sonra Sunucuya Restart Atılacaktır <a:dia5:697032995927752754> @everyone ').then(message => {
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['restart', 'restart', 'check'],
  permLevel: 4
};

exports.help = {
  name: 'restart',
  description: 'restart',
  usage: 'restart'
};