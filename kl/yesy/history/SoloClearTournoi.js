const Discord = require("discord.js");
const config = require("./config/config.json");

module.exports.run = async (bot, message, args, ops) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.delete();
    return;
}

    let channelTeam1 = "501124673354858516"; let channelTeam2 = "502944251026472970";
    let channelTeam3 = "502945786028490753"; let channelTeam4 = "501124944885710859";
    let channelTeam5 = "502945846493446156"; let channelTeam6 = "502945957705547791";
    let inscriptionsolo = "511210802712412170";

    bot.channels.get(inscriptionsolo).setName("🌀inscription-solo-off");

    bot.channels.get(channelTeam1).setName('Equipe 1 -'); bot.channels.get(channelTeam2).setName('Equipe 2 -');
    bot.channels.get(channelTeam3).setName('Equipe 3 -'); bot.channels.get(channelTeam4).setName('Equipe 4 -');
    bot.channels.get(channelTeam5).setName('Equipe 5 -'); bot.channels.get(channelTeam6).setName('Equipe 6 -');

    ops.soloTournoi.clear();

    ops.isONSOLO = false;

    try {
    const clearTournoi = message.member.guild.channels.find('id', '515948520239267844');
    
    clearTournoi.bulkDelete(100);

    const clearEquipeInscriteTournoi = message.member.guild.channels.find('id', '482932870067912724');

    clearEquipeInscriteTournoi.bulkDelete(100);

    const clearresultattournoi = message.member.guild.channels.find('id', '503137930680860683');

    clearresultattournoi.bulkDelete(100);

    const cleainscriptionsolo = message.member.guild.channels.find('id', config.id_channel_inscription_solo);

    cleainscriptionsolo.bulkDelete(100);

    } catch(e){
      console.log(e.stack);
    }


    const inscriptionChannel = message.member.guild.channels.find('id', config.id_channel_inscription_solo);
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

        bot.numermaxinscriptionsolo=0;

    message.reply(`solo tournoi complete :white_check_mark:`).then(message => message.delete(5000));
}

module.exports.help = {
  name: "clearsolo"
}
