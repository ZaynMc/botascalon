const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        //MESSAGE DELETED
        message.delete();
        //RETURN
        return;
    }

    //IF ARGS 0 IF NULL
    if(args[0] == null) {
        //RETURN
        return;
    }

    let inscriptionduo = "488462538283941910";
    bot.channels.get(inscriptionduo).setName('🌀inscription-duo-on');

    let channelTeam1 = "501124673354858516";
    let channelTeam2 = "502944251026472970";
    let channelTeam3 = "502945786028490753";
    let channelTeam4 = "501124944885710859";
    let channelTeam5 = "502945846493446156";
    let channelTeam6 = "502945957705547791";
    let channelTeam7 = "502946007634673666";
    let channelTeam8 = "502946036428439572";
    let channelTeam9 = "502946085145149464";
    let channelTeam10 = "502946189499432971";
    let channelTeam11 = "502946284064342026";
    let channelTeam12 = "502946333045424134";
    let channelTeam13 = "502946388686929920";
    let channelTeam14 = "502946460279635988";
    let channelTeam15 = "502946556186722306";
    let channelTeam16 = "502946621332520981";

    bot.channels.get(channelTeam1).setName('Equipe 1 - ');
    bot.channels.get(channelTeam2).setName('Equipe 2 - ');
    bot.channels.get(channelTeam3).setName('Equipe 3 - ');
    bot.channels.get(channelTeam4).setName('Equipe 4 - ');
    bot.channels.get(channelTeam5).setName('Equipe 5 - ');
    bot.channels.get(channelTeam6).setName('Equipe 6 - ');
    bot.channels.get(channelTeam7).setName('Equipe 7 - ');
    bot.channels.get(channelTeam8).setName('Equipe 8 - ');
    bot.channels.get(channelTeam9).setName('Equipe 9 - ');
    bot.channels.get(channelTeam10).setName('Equipe 10 - ');
    bot.channels.get(channelTeam11).setName('Equipe 11 - ');
    bot.channels.get(channelTeam12).setName('Equipe 12 - ');
    bot.channels.get(channelTeam13).setName('Equipe 13 - ');
    bot.channels.get(channelTeam14).setName('Equipe 14 - ');
    bot.channels.get(channelTeam15).setName('Equipe 15 - ');
    bot.channels.get(channelTeam16).setName('Equipe 16 - ');

    bot.numermaxinscriptionduo = args[0];

    ops.isONDUO = true;

    const inscriptionChannel = message.member.guild.channels.find('id', inscriptionduo);
    inscriptionChannel.send(`Veuillez respecter cette commande pour vous inscrire : a!duo votre team`);

          let muterole = message.guild.roles.find(`name`, "💧 Ascalon 💧");

          inscriptionChannel.overwritePermissions(muterole, {
          SEND_MESSAGES: true
        });

        //CREATE ROLE
        try{

            roletournoi = await message.guild.createRole({
              name: "JOUEUR TOURNOIS",
              color: "#00ff00",
              permissions:[]
            })


          }catch(e){
            console.log(e.stack);
        }

        let roltournoi = message.guild.roles.find(`name`, "JOUEUR TOURNOIS");

        roltournoi.setMentionable(true, 'Role needs to be pinged')
        .then(updated => console.log(`Role mentionable: ${updated.mentionable}`))
        .catch(console.error);

        roltournoi.setPosition(28).then(updated => console.log(`Role position: ${updated.position}`))
            .catch(console.error);

        message.reply(`set duo complete ${bot.numermaxinscriptionsduo} :white_check_mark:`).then(message => message.delete(5000));
}


module.exports.help = {
    //COMMAND
    name: "setduo"
  }
