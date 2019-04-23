const Discord = require("discord.js");
const superagent = require("superagent");
let _function = require("../function.js");

module.exports.run = async (bot, message, args, ops) => {
  

    message.delete();

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.delete();
        return;
    }

    // let args
    let arg = message.content.split(" ").slice(1);
    let thingToEco = arg.join(" ");

    let myRole = message.guild.roles.find(role => role.name === "Notif Sondages");

  bot.channels.get("495904344080777246").sendMessage("Mention :" + myRole);

    var embed = new Discord.RichEmbed()
    .setDescription(`Sondage`)
    .addField(thingToEco, "Répondez au sondage avec ✅ ou ❌")
    .setColor("0xB40404")
    .setTimestamp()
    .setFooter("Sondage ASCALON");
    message.guild.channels.find("name", "🌐sondage").sendEmbed(embed)
    .then(function (message) {
        message.react("❌")
        message.react("✅")

    }).catch(function() { });

   // Notif Sondages
}

module.exports.help = {
  name: "sondage"
}
