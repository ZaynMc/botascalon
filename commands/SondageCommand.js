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

    /*_function.embed(`[LOG] SEND SONDAGE MESSAGE BY ${message.author}`,"history-bot",false, 0);

    bot.channels.get("495904344080777246").sendMessage("Mention :" + myRole);

    const filter = m => m.author.id == message.author.id;
  message.reply("Veuillez entrer votre première emoji... **fin dans 30 secondes...**").then(r => delete(10000));
  message.channel.awaitMessages(filter, {max: 1,time: 30000})
  .then(collected => {

    if(collected.first().content == "cancel") {
      return message.reply("Canceled").then(r => delete(10000));
    }

    let emoji1 = collected.first().content;

    const filter1 = m => m.author.id == message.author.id;
  message.reply("Veuillez entrer votre deuxième emoji... **fin dans 30 secondes...**").then(r => delete(10000));
  message.channel.awaitMessages(filter1, {max: 1,time: 30000})
  .then(collected1 => {

    if(collected1.first().content == "cancel") {
        return message.reply("Canceled").then(r => delete(10000));
      }
      


    }).catch(err => {
    console.log(err);
  });

  }).catch(err => {
    console.log(err);
  });*/
  
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
