const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === "voice");
  let count = 0;

  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;
  const emoji = client.emojis.find(emoji => emoji.name === "tik");
  const umutembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Toplam Üye", `${message.author.displayAvatarURL}`)
    .addField(
      `**Ses Kanallarında ${count} Kişi Bulunmaktadır!**`,
      `**Sunucuda ${message.guild.memberCount} Kişi Bulunmaktadır!**`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/634153978883604481/2f0d3f871fbd02991e940fb2bc849cc5.png?size=2048"
    )
    .setTimestamp();

  message.channel.sendEmbed(umutembed);
  message.react(emoji);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["total", "toplamüye", "toplamkişi", "totalmember"],
  permLevel: 4
};

exports.help = {
  name: "say",
  description: "Sunucudaki ve Ses Kanallarındaki Kişi Sayısını Gösterir! ",
  usage: "say"
};