const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ops, tools) => {

  message.delete();

  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      return;
  }

  tools.clearturtlefightsolo(bot, ops, message);

  message.channel.send("Solo turtle fight reset ✅").then(message => message.delete(5000));
}

module.exports.help = {
  name: "resetsoloturtlefight"
}
