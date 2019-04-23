const Discord = require("discord.js");
let _function = require("../../../function.js");

module.exports.run = async (bot, message, args, ops, tools) => {



    //si l'argument 0 ou 1 (a!ban args[0] and args[1])
    if(args[0] == null || args[1] == null) {

        //message deleted
        message.delete();

        //Return
        return;
    }

    //if author message has not permission "BAN_MEMBERS"
    if(!message.channel.permissionsFor(message.member).hasPermission("BAN_MEMBERS")) {

        //message deleted
        message.delete();

        //LOG
        tools.log(message.author.name + "NOT PERMISSION TO BAN PLAYER", message)

        //Return
        return;
    }

    //recup id mention
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    //if not existe
    if(!rUser) {
        //send message DM
        message.author.send("Bonjour, vous avez essayer d'éxecuter la commande a!ban mais la personne ciblée n'existe pas");

        //message deleted
        message.delete();

        //Return
        return;
    }

    //recup mention first of message
    var member = message.mentions.members.first();

    //id not bannable
    if(!member.bannable) {

        //send message to author
        message.author.send("Bonjour, l'utilisateur ne peut être ban");

        //message deleted
        message.delete();

        //Return
        return;
    }

    let rreason = args.join(" ").slice(22);

    message.guild.member(member).ban(rreason);

    message.delete();
}

module.exports.help = {
  name: "ban"
}
