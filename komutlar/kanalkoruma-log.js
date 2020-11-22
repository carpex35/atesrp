const Discord = require('discord.js');
const db = require('quick.db')
const a = require('../ayarlar.json')

exports.run = async (bot, message,args) => {
  let logk = message.mentions.channels.first();
  let logkanal = await db.fetch(`klog${message.guild.id}`)
  const cfx1 = new Discord.RichEmbed()
  .setColor("#00ff88")
  .setDescription(`Kanal Koruma Logu Kapatıldı!`)
  .setFooter(`MB| Kanal Koruma Sistemi.`, bot.user.avatarURL)
  const cfx2 = new Discord.RichEmbed()
  .setColor("#00ff88")
  .setDescription(`KanalKoruma-Log Seçilmemiş!`)
  .setFooter(`MB| Kanal Koruma Sistemi.`, bot.user.avatarURL)  
  const cfx3 = new Discord.RichEmbed()
  .setColor("#00ff88")
  .setTitle(`**\`KanalKoruma-Log Bilgi;\`**`)
  .setDescription(`** ** \n**Ayarmak İçin:** \`${a.prefix}kanalkoruma-log #kanal\`\n\n **Kapatmak İçin:** \`${a.prefix}kanalkoruma-log kapat\``)
  .setFooter(`MB| Kanal Koruma Sistemi.`, bot.user.avatarURL)  
  const cfx4 = new Discord.RichEmbed()
  .setColor("#00ff88")
  .setDescription(`KanalKoruma-Log başarıyla ${logk} olarak ayarlandı`)
  .setFooter(`MB| Kanal Koruma Sistemi.`, bot.user.avatarURL)  
  
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);


  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    
    if(!logkanal) return message.channel.send(cfx2);
    
   db.delete(`klog${message.guild.id}`)
   message.channel.send(cfx1);
  
    return
  }
  
if (!logk) return message.channel.send(cfx3);
 

   db.set(`klog${message.guild.id}`, logk.id)

message.channel.send(cfx4);

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['klog'],
  permLevel: 4
};

module.exports.help = {
  name: 'kanalkoruma-log',
  description: 'Maximus Boys KOD PAYLASIM',
  usage: 'klog'
};

