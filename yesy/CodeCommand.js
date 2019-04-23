const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    if(!message.member.hasPermission("MANAGE_CHANNELS")) {
        message.delete();
        return;
    }

    let arg = message.content.split(" ").slice(1);
    let botmessage = arg.join(" ");

    const logChannel = message.member.guild.channels.find('name', '🔑lancement-code-pp');
    logChannel.send(botmessage);


}

module.exports.help = {
    name: "code"
  }
