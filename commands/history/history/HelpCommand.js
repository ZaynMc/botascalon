const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    message.delete();

    const embed = new Discord.RichEmbed()
  .setTitle("Commands du bot")
  .setAuthor("Zayn", "https://i.imgur.com/318H4Xw.png")

  .setColor(0x00AE86)
  .setFooter("Créer par Zayn", "https://i.imgur.com/318H4Xw.png")
  .setThumbnail("https://i.imgur.com/3ubvmFE.png")

  .setTimestamp()
  .addField("a!ban @User Raison","Cette commande permet de ban un joueur du serveur.", true)

  .addField("a!kick @User", "Cette commande permet de kick un joueur du serveur.", true)

  .addField("a!mute @User 1s/m/h/d", "Cette command permet de mute un joueur sur un temps défini, il est impossible de mute permanent quelqu'un.", true)

  .addField("a!unmute @User", "Cette commande permet d'unmute un joueur, il est impossible d'unmute une personne non mute.", true)

  .addField("a!sondage <votre question>", "Cette commande permet de faire un sondage a choix multiples (2).", true)

  .addBlankField(true)
 
  message.channel.send({embed});
}

module.exports.help = {
    name: "help"
  }
