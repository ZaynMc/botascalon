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
  bot.numbersolomax = sizeMax;
  tools.setsolo(sizeMax, bot);
  const logChannel = message.member.guild.channels.find('name', 'history-bot');
  logChannel.send(`[LOG] ${ops.soloTournoi.size} / ${bot.numbersolomax}`);

  const inscription = message.member.guild.channels.find('id', '511210802712412170');
  inscription.send(`Veuillez éxecuter cette commande : **a!solo votre pseudo** pour vous inscrire !`);
}

module.exports.help = {
  name: "initsolo"
}
