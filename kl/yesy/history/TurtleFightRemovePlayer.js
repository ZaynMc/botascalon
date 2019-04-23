const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ops, tools) => {


  message.delete();

  let arg = message.content.split(" ").slice(1);
  let messages = arg.join(" ");

    if(ops.soloTurtleFightTournoi.has(`${messages}`)) {
      ops.soloTurtleFightTournoi.delete(`${messages}`);
      //ROLE REMOVE
      let muterole = message.member.guild.roles.find(`name`, "JOUEUR TOURNOIS");
      message.member.removeRole(muterole.id);

      const joinChannel = message.member.guild.channels.find('name', '🚻equipe-inscrite');
      joinChannel.send(`Le joueur ${messages} vient de se désinscrire pour le tournoi **ASCALON SOLO TURTLE FIGHT** ${ops.soloTurtleFightTournoi.size} / ${bot.numersoloturtlefightmax}`);
    }
    return;
}

module.exports.help = {
  name: "removesolotf"
}
