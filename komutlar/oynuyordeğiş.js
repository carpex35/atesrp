const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.id !== '623288399842902037') return message.reply('Yetkin Yok Kardeşim! ');
      const sayMessage = args.join(` `);
      client.user.setGame(sayMessage);
      message.channel.send(`Oyun ismi **${sayMessage}** olarak değiştirildi :ok_hand:`)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oynuyor","setgame","status"],
  permLevel: 4
};

exports.help = {
  name: 'oyundeğiş',
  description: 'Botun pingini gösterir.',
  usage: 'oyundeğiş'
};