const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ops, tools) => {
    

  message.delete();

  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      return;
  }

  tools.clearsolo(bot, ops, message);

  message.channel.send("Solo reset ✅").then(message => message.delete(5000));
}

module.exports.help = {
  name: "resetsolo"
}
