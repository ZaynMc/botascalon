const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

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

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.delete();
        return;
    }

        let inscriptionduo = "488462538283941910";

        bot.channels.get(inscriptionduo).setName('🌀inscription-duo-off');

        bot.channels.get(channelTeam1).setName('Equipe 1 -'); bot.channels.get(channelTeam2).setName('Equipe 2 -');
        bot.channels.get(channelTeam3).setName('Equipe 3 -'); bot.channels.get(channelTeam4).setName('Equipe 4 -');
        bot.channels.get(channelTeam5).setName('Equipe 5 -'); bot.channels.get(channelTeam6).setName('Equipe 6 -');
        bot.channels.get(channelTeam7).setName('Equipe 7 -'); bot.channels.get(channelTeam8).setName('Equipe 8 -');
        bot.channels.get(channelTeam9).setName('Equipe 9 -'); bot.channels.get(channelTeam10).setName('Equipe 10 -');
        bot.channels.get(channelTeam11).setName('Equipe 11 -'); bot.channels.get(channelTeam12).setName('Equipe 12 -');
        bot.channels.get(channelTeam13).setName('Equipe 13 -'); bot.channels.get(channelTeam14).setName('Equipe 14 -');
        bot.channels.get(channelTeam15).setName('Equipe 15 -'); bot.channels.get(channelTeam16).setName('Equipe 16 -');

        ops.duoTournoi.clear();

        ops.isONDUO = false;

        try {
            const clearTournoi = message.member.guild.channels.find('id', '523632020081999904');
            clearTournoi.bulkDelete(100);


            const clearEquipeInscriteTournoi = message.member.guild.channels.find('id', '482932870067912724');

            clearEquipeInscriteTournoi.bulkDelete(100);

            const clearresultattournoi = message.member.guild.channels.find('id', '503137930680860683');

            clearresultattournoi.bulkDelete(100);

            const cleainscriptionduo = message.member.guild.channels.find('id', '488462538283941910');

            cleainscriptionduo.bulkDelete(100);

            } catch(e){
              console.log(e.stack);
            }



    const inscriptionChannel = message.member.guild.channels.find('id', '488462538283941910');
    //inscriptionChannel.send(`Pseudo du joueur IG :`);

    let joueurtournoi = message.guild.roles.find(`name`, "JOUEUR TOURNOIS");

        joueurtournoi.delete('delete role')
        .then(deleted => console.log(`Deleted role ${deleted.name}`))
        .catch(console.error);


    try {
          let muterole = message.guild.roles.find(`name`, "💧 Ascalon 💧");

          inscriptionChannel.overwritePermissions(muterole, {
          SEND_MESSAGES: false
        });

      } catch(e){
        console.log(e.stack);
      }

        bot.numermaxinscriptionduo=0;

    message.reply(`solo tournoi complete :white_check_mark:`).then(message => message.delete(5000));
}

module.exports.help = {
    name: "clearduo"
  }
