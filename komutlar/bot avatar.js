const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if(message.author.id !== ayarlar.sahip) 
    return message.reply('bunu kullanmak için bot sahibi olman lazım.');
    const ayarlanan = args.join(` `);
    client.user.setAvatar(ayarlanan);
  return message.channel.send("Başarıyla profil resmimi URL'de belirtilen resimle değiştirdim.");
      
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'avatar-ayarla',
  description: 'Botun avatarını ayarlar. Sen yapamazsın :D',
  usage: 'avatar-ayarla <URL>'
};