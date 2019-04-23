const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

  

    if(args[0] == null) {
        message.delete();
        return;
    }

    if(!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")) {
        message.delete();
        //LOG
        tools.log(message.author.name + "NOT PERMISSION TO BAN PLAYER", message)
        return;
    }

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) {
        message.author.send("Bonjour, vous avez essayer d'éxecuter la commande a!kick mais la personne ciblée n'existe pas");
        message.delete();
        return;
    }

    var member = message.mentions.members.first();

    if(!member.kickable) {
        message.author.send("Bonjour, l'utilisateur ne peut être kick");
        message.delete();
        return;
    }

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#15f153")
    .addField("Kick User", `${rUser}`)
    .addField("Kick par", `${message.author}`)

    member.kick("ASCALON BOT");

    const logChannel = message.member.guild.channels.find('name', 'history-bot');
    logChannel.send(`[LOG] BOT KICK ${rUser} ${message.author}`);

    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: "ASCALON BOT",
          icon_url: "https://i.imgur.com/r1T3PbX.png"
        },
        title: `Le joueur ${rUser.displayName} est kick !`,
        timestamp: new Date(),
        footer: {
          icon_url: "https://i.imgur.com/318H4Xw.png",
          text: "© Created by Zayn#0607"
        }
      }
    }).then(message => message.delete(30000));


    let kickchannel = message.guild.channels.find(`name`, "history-bot");
    if(!kickchannel) return;


    message.delete();
    kickchannel.send(reportEmbed);

    let kickchanneltest = message.guild.channels.find(`name`, "sanction_modération");
    if(!kickchanneltest) return;

    kickchanneltest.send(reportEmbed);

}

module.exports.help = {
    name: "kick"
  }
