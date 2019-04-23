const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
    let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!wUser) return;
    if(wUser.hasPermission("MANAGE_MESSAGES"))return;
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if(err) console.log(err);
    });

    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setAuthor(message.author.username)
    .setColor("#fc6400")
    .addField("Warned User", wUser.tag)
    .addField("Warned in", message.channel)
    .addField("Numer oh Warnings", warns[wUser.id].warns)
    .addField("Reason", reason);

    let warnchannel = message.guild.channels.find(`name`,`warm`);

    warnchannel.send(warnEmbed);
    //if(warns[wUser.id].warns == 2)
}

module.exports.help = {
  name:"warm"
}