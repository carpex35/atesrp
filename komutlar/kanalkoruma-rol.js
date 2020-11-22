const Discord = require('discord.js');
const db = require('quick.db')
const a = require('../ayarlar.json')

exports.run = async (bot, message,args) => {
  let logk = message.mentions.channels.first();
  let logkanal = db.fetch(`klog_${message.guild.id}`)
  let cfxrol = message.mentions.roles.first()
  let cfxroldb = await db.fetch(`cfxrol${message.guild.id}`)
  let cfxroldb2 = await db.fetch(`cfxrol2${message.guild.id}`)
  
  const cfx1 = new Discord.RichEmbed()
  .setColor("#00ff88")
  .setDescription(`Kanal Koruma Rolü Sıfırlandı!`)
  .setFooter(`MB| Kanal Koruma Sistemi.`, bot.user.avatarURL)
  const cfx2 = new Discord.RichEmbed()
  .setColor("#00ff88")
  .setDescription(`KanalKoruma-Log Seçilmemiş!`)
  .setFooter(`MB| Kanal Koruma Sistemi.`, bot.user.avatarURL)
  const cfx3 = new Discord.RichEmbed()
  .setColor("#00ff88")
  .setDescription(`Alınacak Rol Zaten <@&${cfxroldb}> olarak ayarlanmış.`)
  .setFooter(`MB| Kanal Koruma Sistemi.`, bot.user.avatarURL)
  const cfx7 = new Discord.RichEmbed()
  .setColor("#00ff88")
  .setDescription(`Alınacak 2. Rol Zaten <@&${cfxroldb2}> olarak ayarlanmış.`)
  .setFooter(`MB| Kanal Koruma Sistemi.`, bot.user.avatarURL)
  const cfx4 = new Discord.RichEmbed()
  .setColor("#00ff88")
  .setDescription(`Alınacak Rol ${cfxrol} olarak ayarlandı.`)
  .setFooter(`MB| Kanal Koruma Sistemi.`, bot.user.avatarURL)
  const cfx8 = new Discord.RichEmbed()
  .setColor("#00ff88")
  .setDescription(`Alınacak 2. Rol ${cfxrol} olarak ayarlandı.`)
  .setFooter(`MB| Kanal Koruma Sistemi.`, bot.user.avatarURL)
  const cfx5 = new Discord.RichEmbed()
  .setColor("#00ff88")
  .setDescription(`Rol Seçilmemiş`)
  .setFooter(`MB| Kanal Koruma Sistemi.`, bot.user.avatarURL)
  const cfx6 = new Discord.RichEmbed()
  .setColor("#00ff88")
  .setDescription(`Bir Rol Etiketlemelisin`)
  .setFooter(`MB| Kanal Koruma Sistemi.`, bot.user.avatarURL)
  const cfx9= new Discord.RichEmbed()
  .setColor("#00ff88")
  .setDescription(`** ** \n**Ayarmak İçin:** \`${a.prefix}kanalkoruma-rol @rol\`\n\n **2. Rolü Ayarlamak İçin:** \`${a.prefix}kanalkoruma-rol 2 @rol\`\n\n **Sıfırlamak İçin:** \`${a.prefix}kanalkoruma-rol sıfırla\``)
  .setFooter(`MB| Kanal Koruma Sistemi.`, bot.user.avatarURL)
 
  
  
  if(!args[0]) return message.channel.send(cfx9)
  
  if (args[0] === "sıfırla") {
    
    
    
    if (!cfxroldb) return message.channel.send(cfx5);
    if (!logkanal) return message.channel.send(cfx2);
    
    
    db.delete(`cfxrol${message.guild.id}`)
    db.delete(`cfxrol2${message.guild.id}`)
    message.channel.send(cfx1);
    
    return
  }

  if (args[0] === "2") {
    
    
    if(!logkanal) return message.channel.send(cfx2);
    if(!cfxrol) return message.channel.send(cfx6)
    if (cfxroldb2 === cfxrol.id) return message.channel.send(cfx7);
    
    db.set(`cfxrol2${message.guild.id}`, cfxrol.id)
    message.channel.send(cfx8);
    
    return
    
  }

    
    if(!logkanal) return message.channel.send(cfx2);
    if(!cfxrol) return message.channel.send(cfx6)
    if (cfxroldb === cfxrol.id) return message.channel.send(cfx3);
    
    db.set(`cfxrol${message.guild.id}`, cfxrol.id)
    message.channel.send(cfx4);
  }

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['krol'],
  permLevel: 4
};

module.exports.help = {
  name: 'kanalkoruma-rol',
  description: 'Maximus Boys KOD PAYLASIM',
  usage: 'krol'
};