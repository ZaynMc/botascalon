const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ops, tools) => {

  message.delete();

  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      return;
  }

  if(args[0] == null) {
    message.channel.send("Vous n'avez pas précisez le nombre d'inscription max.").then(message => message.delete(5000));
      return;
  }

  var sizeMax = args[0];
  tools.initsolo(sizeMax, bot, ops, message);
}

module.exports.help = {
  name: "initsolo"
}