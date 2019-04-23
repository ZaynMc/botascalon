const Discord = require("discord.js");
const config = require("./config/config.json");

module.exports.run = async (bot, message, args, ops) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.delete();
        return;
    }

    let inscriptionsolo = config.id_channel_inscription_solo;
    bot.channels.get(inscriptionsolo).setName(config.name_channel_inscription_solo_on);

    if(args[0] == null) {
        return;
    }

    ops.isONSOLO = true;

    let channelTeam1 = "501124673354858516";
    let channelTeam2 = "502944251026472970";
    let channelTeam3 = "502945786028490753";
    let channelTeam4 = "501124944885710859";
    let channelTeam5 = "502945846493446156";
    let channelTeam6 = "502945957705547791";

    if(args[0] == "16") {

    bot.channels.get(channelTeam1).setName('Poule 1');
    bot.channels.get(channelTeam2).setName('Poule 2');
    bot.channels.get(channelTeam3).setName('Poule 3');
    bot.channels.get(channelTeam4).setName('Poule 4');

    const logChannel = message.member.guild.channels.find('name', 'history-bot');
    logChannel.send(`[LOG] EQUIPE 1 TO POULE 1 CHANGED`);// ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 2 TO POULE 2 CHANGED`);// ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 3 TO POULE 3 CHANGED`);// ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 4 TO POULE 4 CHANGED`);// ${message.author}`);

    }

    if(args[0] == "20") {

        bot.channels.get(channelTeam1).setName('Poule 1');
        bot.channels.get(channelTeam2).setName('Poule 2');
        bot.channels.get(channelTeam3).setName('Poule 3');
        bot.channels.get(channelTeam4).setName('Poule 4');
        bot.channels.get(channelTeam5).setName('Poule 5');
    }

    if(args[0] == "24") {

        bot.channels.get(channelTeam1).setName('Poule 1');
        bot.channels.get(channelTeam2).setName('Poule 2');
        bot.channels.get(channelTeam3).setName('Poule 3');
        bot.channels.get(channelTeam4).setName('Poule 4');
        bot.channels.get(channelTeam5).setName('Poule 5');
        bot.channels.get(channelTeam6).setName('Poule 6');
    }

    bot.channels.get(channelTeam1).setName('Poule 1');
    bot.channels.get(channelTeam2).setName('Poule 2');
    bot.channels.get(channelTeam3).setName('Poule 3');
    bot.channels.get(channelTeam4).setName('Poule 4');

    bot.numermaxinscriptionsolo = args[0];

    ops.isONSOLO = true;

    const inscriptionChannel = message.member.guild.channels.find('id', inscriptionsolo);
    inscriptionChannel.send(`Veuillez respecter cette commande pour vous inscrire : a!inscriptionsolo votre pseudo`);

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



    message.reply(`set solo complete ${bot.numermaxinscriptionsolo} :white_check_mark:`).then(message => message.delete(5000));
};

module.exports.help = {
    name: "setsolo"
  }
