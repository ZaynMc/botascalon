const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ops, tools) => {

  

  message.delete();

  if(message.channel.name == "🌀inscription-solo-buildfight-off")
  return message.channel.send(`<@${message.author.id}> L'inscription pour le tournoi **ASCALON SOLO BUILD FIGHT** est fermer.`).then(message => message.delete(5000));

  let arg = message.content.split(" ").slice(1);
  let messages = arg.join(" ");

  if(ops.soloBuildFightTournoi.has(`${messages}`) || ops.soloBuildFightTournoi.has(`<@${message.author.name}>`))
  return message.channel.send(`<@${message.author.id}> Vous êtes déjà inscrit au tournoi.`);

  const logChannel = message.member.guild.channels.find('name', 'history-bot');
  logChannel.send(`[LOG] ${ops.soloBuildFightTournoi.size} / ${ops.numersolobuildfightmax}`);

  if(ops.soloBuildFightTournoi.size >= bot.numersolobuildfightmax) {
    var embed = new Discord.RichEmbed()
    .setTitle(`TOURNOI SOLO BUILD FIGHT ASCALON`)
    .addField(`📛 Vous n'êtes pas inscrit au tournoi ASCALON SOLO BUILD FIGHT ${messages} ! Celui ci est au complet 📛`, "🕛 Vous venez quand même au tournoi, des places se libéreront surêment ! 🕛")
    .setColor("0xB40404")
    .setTimestamp()
    .setFooter("TOURNOI SOLO BUILD FIGHT ASCALON");
    message.guild.channels.find("id", "529674447859482654").sendEmbed(embed);
    return;
  }

  ops.soloBuildFightTournoi.set(`${messages}`, `<@${message.author.name}>`);
  const joinChannel = message.member.guild.channels.find('name', '🚻equipe-inscrite');
  joinChannel.send(`Le joueur ${messages} (<@${message.author.id}>) vient de s'inscrire pour le tournoi **ASCALON SOLO** ${ops.soloBuildFightTournoi.size} / ${bot.numersolobuildfightmax}`);

  let role = message.guild.roles.find(`name`, `JOUEUR TOURNOIS`);
  const guildMember = message.member;
  guildMember.addRole(role.id);

  var embed = new Discord.RichEmbed()
  .setTitle(`TOURNOI SOLO BUILD FIGHT ASCALON`)
  .addField(`🔥 Vous êtes inscrit au tournoi ASCALON SOLO BUILD FIGHT ${messages} ! 🔥`, "🕛 N'oubliez pas d'être à l'heure pour le tournoi 🕛")
  .setColor("0xB40404")
  .setTimestamp()
  .setFooter("TOURNOI SOLO BUILD FIGHT ASCALON");
  message.guild.channels.find("id", "529674447859482654").sendEmbed(embed);

  logChannel.send(`[LOG] ${ops.soloBuildFightTournoi.size} / ${ops.numersolobuildfightmax}`);
}


module.exports.help = {
  name: "solobf"
}
