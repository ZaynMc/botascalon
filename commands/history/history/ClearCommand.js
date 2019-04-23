const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {



    message.delete();

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.delete();
        return;
    }

    if(!args[0]) {
        message.channel.send("Vous n'avez pas précisez combien de message je dois supprimer").then(message => message.delete(2000));
        message.delete();
        return;
    }

    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`${args[0]} ont été clear !`).then(msg => msg.delete(50000));
    });
    
}

module.exports.help = {
    name: "clear"
  }
