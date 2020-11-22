const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.delete() 
  message.channel.send('<a:dia5:697032995927752754> Sunucumuz Aktiftir Giriş Yapalilirsiniz **31.214.243.114** <a:dia5:697032995927752754> https://gph.is/g/E3mB7wY <a:dia5:697032995927752754> @everyone <a:dia5:697032995927752754> ').then(message => {
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aktif', 'aktif', 'check'],
  permLevel: 3
};

exports.help = {
  name: 'aktif',
  description: 'aktif',
  usage: 'aktif'
};