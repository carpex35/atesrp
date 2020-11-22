const fs = require ('fs')
const Discord = require('discord.js')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));

exports.run = async (bot, message, args) =>

{
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);

  
      let profil = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send("**Otorol Ayarlamam İçin Bir Kanal ve Rol Belirlemelisin.**<a:unlem:611628636759654417> ");
  if (message.guild.member(message.author.id).hasPermission(0x8))

    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.send("**Doğru Kullanım = !!otorol-ayarla @<roladı> #<metinkanalı>**<a:unlem:611628636759654417> ".then(msg => msg.delete(5000)));

    if(!profil[message.guild.id]){

        profil[message.guild.id] = {

            sayi: mentionedRole.id,
      kanal: mentionedChannel.id
        };
    }

    profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id

    fs.writeFile("./otorol.json", JSON.stringify(profil), (err) => {
        console.log(err)

    })

    const embed = new Discord.RichEmbed()
        .setDescription(`╔▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
                         ║► Otorol Başarılı Bir Şekilde Ayarlanmıştır.<a:giflitik:611628644548476954>
                         ║► Otorol ${args[0]} Olarak Ayarlanmıştır.<a:giflitik:611628644548476954>
                         ║► Otorol Kanalı ${mentionedChannel} Olarak Ayarlanmıştır.<a:giflitik:611628644548476954>
                         ║► Otorolü Kapatmak İçin **!!otorol-kapat** Yazmalısınız.<a:giflitik:611628644548476954>
                         ╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
}

}

exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["setautorole", "otorol", "otoroldeğiştir"]
}

exports.help =
{
  name: 'otorol-ayarla',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorolayarla'
}