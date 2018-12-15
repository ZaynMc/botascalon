const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    message.delete();

  
    //IF NOT CHANNEL ON
    if(message.channel.name == "🌀inscription-solo-off") return message.channel.send(`<@${message.author.id}> L'inscription pour le tournoi **ASCALON SOLO** est fermer. `).then(message => message.delete(5000));
    
    let arg = message.content.split(" ").slice(1);
    let messages = arg.join(" ");

    if(ops.soloTournoi.has(`${messages}`)) {
      message.channel.send(`<@${message.author.name}> Vous êtes déjà inscrit`);
      return;
    }

    if(ops.soloTournoi.has(`<@${message.author.name}>`)) {
      message.channel.send(`<@${message.author.id}> Vous êtes déjà inscrit`);
      return;
    }

    
    //TOURNOI FULL
    if(ops.soloTournoi.size >= bot.numermaxinscriptionsolo) {
      var embed = new Discord.RichEmbed()
    .setTitle(`TOURNOI SOLO ASCALON`)
    .addField(`📛 Vous n'êtes pas inscrit au tournoi ASCALON SOLO ${messages} ! Celui ci est au complet 📛`, "🕛 Vous venez quand même au tournoi, des places se libéreront surêment ! 🕛")
    .setColor("0xB40404")
    .setTimestamp()
    .setFooter("TOURNOI SOLO ASCALON");
    message.guild.channels.find("id", "482932870067912724").sendEmbed(embed);
       //message.channel.send(`<@${message.author.id}> Le tournoi est plein.`); 
      return;
    }
    
    const joinChannel = message.member.guild.channels.find('name', '🚻equipe-inscrite');
    joinChannel.send(`Le joueur ${messages} (<@${message.author.id}>) vient de s'inscrire pour le tournoi **ASCALON SOLO**`);
    ops.soloTournoi.set(`${messages}`, `<@${message.author.name}>`);

    let role = message.guild.roles.find(`name`, `JOUEUR TOURNOIS`);

    const guildMember = message.member;
    guildMember.addRole(role.id);

    var embed = new Discord.RichEmbed()
    .setTitle(`TOURNOI SOLO ASCALON`)
    .addField(`🔥 Vous êtes inscrit au tournoi ASCALON SOLO ${messages} ! 🔥`, "🕛 N'oubliez pas d'être à l'heure pour le tournoi 🕛")
    .setColor("0xB40404")
    .setTimestamp()
    .setFooter("TOURNOI SOLO ASCALON");
    message.guild.channels.find("id", "511210802712412170").sendEmbed(embed);

    //📛📛
}
 
module.exports.help = {
  name: "inscriptionsolo"
}
