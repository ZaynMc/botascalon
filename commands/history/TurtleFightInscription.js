const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ops, tools) => {


  message.delete();

  if(message.channel.name == "🌀inscription-solo-turtle-fight-off")
  return message.channel.send(`<@${message.author.id}> L'inscription pour le tournoi **ASCALON SOLO TURTLE FIGHT** est fermer.`).then(message => message.delete(5000));

  let arg = message.content.split(" ").slice(1);
  let messages = arg.join(" ");

  if(ops.soloTurtleFightTournoi.has(`${messages}`) || ops.soloTurtleFightTournoi.has(`<@${message.author.name}>`))
  return message.channel.send(`<@${message.author.id}> Vous êtes déjà inscrit au tournoi.`);

  const logChannel = message.member.guild.channels.find('name', 'history-bot');
  logChannel.send(`[LOG] ${ops.soloTurtleFightTournoi.size} / ${ops.numersoloturtlefightmax}`);

  if(ops.soloTurtleFightTournoi.size >= bot.numersoloturtlefightmax) {
    var embed = new Discord.RichEmbed()
    .setTitle(`TOURNOI SOLO TURTLE FIGHT ASCALON`)
    .addField(`📛 Vous n'êtes pas inscrit au tournoi ASCALON SOLO TURTLE FIGHT ${messages} ! Celui ci est au complet 📛`, "🕛 Vous venez quand même au tournoi, des places se libéreront surêment ! 🕛")
    .setColor("0xB40404")
    .setTimestamp()
    .setFooter("TOURNOI SOLO TURTLE FIGHT ASCALON");
    message.guild.channels.find("id", "529654956538462209").sendEmbed(embed);
    return;
  }

  ops.soloTurtleFightTournoi.set(`${messages}`, `<@${message.author.name}>`);
  const joinChannel = message.member.guild.channels.find('name', '🚻equipe-inscrite');
  joinChannel.send(`Le joueur ${messages} (<@${message.author.id}>) vient de s'inscrire pour le tournoi **ASCALON SOLO TURTLE FIGHT** ${ops.soloTurtleFightTournoi.size} / ${bot.numersoloturtlefightmax}`);

  let role = message.guild.roles.find(`name`, `JOUEUR TOURNOIS`);
  const guildMember = message.member;
  guildMember.addRole(role.id);

  var embed = new Discord.RichEmbed()
  .setTitle(`TOURNOI SOLO TURTLE FIGHT ASCALON`)
  .addField(`🔥 Vous êtes inscrit au tournoi ASCALON TURTLE FIGHT SOLO ${messages} ! 🔥`, "🕛 N'oubliez pas d'être à l'heure pour le tournoi 🕛")
  .setColor("0xB40404")
  .setTimestamp()
  .setFooter("TOURNOI SOLO TURTLE FIGHT ASCALON");
  message.guild.channels.find("id", "529654956538462209").sendEmbed(embed);

  logChannel.send(`[LOG] ${ops.soloTurtleFightTournoi.size} / ${ops.numersoloturtlefightmax}`);
}


module.exports.help = {
  name: "solotf"
}
