const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('683689416996421756') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription(` | **${ayarlar.prefix}yetkili** Yetkili Komutları.\n  | **${ayarlar.prefix}kullanıcı** Kullanıcıya Komutları.\n  |  **${ayarlar.prefix}eğlence** Eğlence Komutları.\n  | **${ayarlar.prefix}oyun**  Oyun Komutları Gösterir.\n` + `| **${ayarlar.prefix}seviyeyardım**  Seviyeyardım Komutları Gösterir.\n`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=685384347439988736&scope=bot&permissions=2146958847) **`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("")  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 4,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};