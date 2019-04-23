const Discord = require("discord.js");

    let channelTeam1 = "501124673354858516";
    let channelTeam2 = "502944251026472970";
    let channelTeam3 = "502945786028490753";
    let channelTeam4 = "501124944885710859";
    let channelTeam5 = "502945846493446156";
    let channelTeam6 = "502945957705547791";
    let channelTeam7 = "502946007634673666";
    let channelTeam8 = "502946036428439572";
    let channelTeam9 = "502946085145149464";
    let channelTeam10 = "502946189499432971";
    let channelTeam11 = "502946284064342026";
    let channelTeam12 = "502946333045424134";
    let channelTeam13 = "502946388686929920";
    let channelTeam14 = "502946460279635988";
    let channelTeam15 = "502946556186722306";
    let channelTeam16 = "502946621332520981";

module.exports.run = async (bot, message, args, ops) => {

    message.delete();

    //IF NOT CHANNEL ON
    if(message.channel.name == "🌀inscription-duo-off") return message.channel.send(`<@${message.author.id}> L'inscription pour le tournoi **ASCALON DUO** est fermer. `).then(message => message.delete(5000));

    let arg = message.content.split(" ").slice(1);
    let messages = arg.join(" ");
    if(ops.duoTournoi.has(`${messages}`)) {
      message.channel.send(`<@${message.author.id}> Vous êtes déjà inscrit`);
      return;
    }

    if(ops.duoTournoi.has(`${message.author.name}`)) {
        message.channel.send(`<@${message.author.id}> Vous êtes déjà inscrit`);
        return;
      }

    //TOURNOI FULL
    if(ops.duoTournoi.size >= bot.numermaxinscriptionduo) {
        var embed = new Discord.RichEmbed()
        .setTitle(`TOURNOI DUO ASCALON`)
        .addField(`📛 Vous n'êtes pas inscrit au tournoi ASCALON DUO **${messages}** ! Celui ci est au complet 📛`, "🕛 Vous venez quand même au tournoi, des places se libéreront surêment ! 🕛")
        .setColor("0xB40404")
        .setTimestamp()
        .setFooter("TOURNOI SOLO ASCALON");
        message.guild.channels.find("id", "488462538283941910").sendEmbed(embed);
           //message.channel.send(`<@${message.author.id}> Le tournoi est plein.`);
          return;
    }


    const joinChannel = message.member.guild.channels.find('name', '🚻equipe-inscrite');
    joinChannel.send(`Le duo ${messages} (<@${message.author.id}>) vient de s'inscrire pour le tournoi **ASCALON DUO**`);
    ops.duoTournoi.set(`${messages}`, `${message.author.name}`);

    let role = message.guild.roles.find(`name`, `JOUEUR TOURNOIS`);

    const guildMember = message.member;
    guildMember.addRole(role.id);
    var embed = new Discord.RichEmbed()
    .setTitle(`TOURNOI DUO ASCALON`)
    .addField(`🔥 Vous êtes inscrit au tournoi ASCALON DUO **${messages}** ! 🔥`, "🕛 N'oubliez pas d'être à l'heure pour le tournoi 🕛")
    .setColor("0xB40404")
    .setTimestamp()
    .setFooter("TOURNOI DUO ASCALON");
    message.guild.channels.find("id", "488462538283941910").sendEmbed(embed);

    if(ops.duoTournoi.size == 1){
        bot.channels.get(channelTeam1).setName(`Equipe 1 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 2){
        bot.channels.get(channelTeam2).setName(`Equipe 2 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 3){
        bot.channels.get(channelTeam3).setName(`Equipe 3 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 4){
        bot.channels.get(channelTeam4).setName(`Equipe 4 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 5){
        bot.channels.get(channelTeam5).setName(`Equipe 5 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 6){
        bot.channels.get(channelTeam6).setName(`Equipe 6 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 7){
        bot.channels.get(channelTeam7).setName(`Equipe 7 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 8){
        bot.channels.get(channelTeam8).setName(`Equipe 8 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 9){
        bot.channels.get(channelTeam9).setName(`Equipe 9 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 10){
        bot.channels.get(channelTeam10).setName(`Equipe 10 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 11){
        bot.channels.get(channelTeam11).setName(`Equipe 11 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 12){
        bot.channels.get(channelTeam12).setName(`Equipe 12 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 13){
        bot.channels.get(channelTeam13).setName(`Equipe 13 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 14){
        bot.channels.get(channelTeam14).setName(`Equipe 14 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 15){
        bot.channels.get(channelTeam15).setName(`Equipe 15 - ${messages}`);
        return;
    }

    if(ops.duoTournoi.size == 16){
        bot.channels.get(channelTeam16).setName(`Equipe 16 - ${messages}`);
        return;
    }
}

module.exports.help = {
    //COMMAND
    name: "duo"
  }
