let _function = require("../function.js");

module.exports.run = async (bot, message, args, ops, tools) => {

  message.delete();
  //CHECK IF MENTION USER EXIST
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return;

  if(tomute.hasPermission("MANAGE_MESSAGES")) return;
  let muterole = message.guild.roles.find(`name`, 'muted');

  if(message.member.roles.has(muterole.id)) {

    tomute.removeRole(muterole.id);

    _function.embed(`Le joueur ${tomute.user.username} est unmute !`, "history-bot", false, 0);
    _function.embed(`Le joueur ${tomute.user.username} est unmute !`, message.channel.name, true, 3000);

}
}

module.exports.help = {
  name: "unmute"
}
