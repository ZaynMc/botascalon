const Discord = require("discord.js");

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


module.exports.run = async (bot, message, args, ops) => {

  //filter id
  const filter = m => m.author.id === message.author.id;

  //team 1
  message.reply("Entrer le nom de la première team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team1 => {
    team1.delete(15000);
    if (team1.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la deuxième team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team2 => {
    team2.delete(15000);
    if (team2.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la troisième team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team3 => {
    team3.delete(15000);
    if (team3.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 4ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team4 => {
    team4.delete(15000);
    if (team4.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 5ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team5 => {
    team5.delete(15000);
    if (team5.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 6ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team6 => {
    team6.delete(15000);
    if (team6.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 7ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team7 => {
    team7.delete(15000);
    if (team7.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 8ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team8 => {
    team8.delete(15000);
    if (team8.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 9ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team9 => {
    team9.delete(15000);
    if (team9.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 10ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team10 => {
    team10.delete(15000);
    if (team10.first().content === 'cancel') {
      return message.reply("Annulé.");
    }


    message.reply("Entrer le nom de la 11ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team11 => {
    team11.delete(15000);
    if (team11.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 12ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team12 => {
    team12.delete(15000);
    if (team12.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 13ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team13 => {
    team13.delete(15000);
    if (team13.first().content === 'cancel') {
      return message.reply("Annulé.");
    }


    message.reply("Entrer le nom de la 14ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team14 => {
    team14.delete(15000);
    if (team14.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 15ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team15 => {
    team15.delete(15000);
    if (team15.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 16ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team16 => {
    team16.delete(15000);
    if (team16.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    let nameTeam1 = team1.first().content;
    let nameTeam2 = team2.first().content;
    let nameTeam3 = team3.first().content;
    let nameTeam4 = team4.first().content;
    let nameTeam5 = team5.first().content;
    let nameTeam6 = team6.first().content;
    let nameTeam7 = team7.first().content;
    let nameTeam8 = team8.first().content;
    let nameTeam9 = team9.first().content;
    let nameTeam10 = team10.first().content;
    let nameTeam11 = team11.first().content;
    let nameTeam12 = team12.first().content;
    let nameTeam13 = team13.first().content;
    let nameTeam14 = team14.first().content;
    let nameTeam15 = team15.first().content;
    let nameTeam16 = team16.first().content;

    bot.channels.get(channelTeam1).setName('Equipe 1 - ' + nameTeam1);
    bot.channels.get(channelTeam2).setName('Equipe 2 - ' + nameTeam2);
    bot.channels.get(channelTeam3).setName('Equipe 3 - ' + nameTeam3);
    bot.channels.get(channelTeam4).setName('Equipe 4 - ' + nameTeam4);
    bot.channels.get(channelTeam5).setName('Equipe 5 - ' + nameTeam5);
    bot.channels.get(channelTeam6).setName('Equipe 6 - ' + nameTeam6);
    bot.channels.get(channelTeam7).setName('Equipe 7 - ' + nameTeam7);
    bot.channels.get(channelTeam8).setName('Equipe 8 - ' + nameTeam8);
    bot.channels.get(channelTeam9).setName('Equipe 9 - ' + nameTeam9 );
    bot.channels.get(channelTeam10).setName('Equipe 10 - '  + nameTeam10);
    bot.channels.get(channelTeam11).setName('Equipe 11 - '  + nameTeam11);
    bot.channels.get(channelTeam12).setName('Equipe 12 - '  + nameTeam12);
    bot.channels.get(channelTeam13).setName('Equipe 13 - ' + nameTeam13 );
    bot.channels.get(channelTeam14).setName('Equipe 14 - ' + nameTeam14 );
    bot.channels.get(channelTeam15).setName('Equipe 15 - ' + nameTeam15 );
    bot.channels.get(channelTeam16).setName('Equipe 16 - ' + nameTeam16 );
    
    const logChannel = message.member.guild.channels.find('name', 'history-bot');
    logChannel.send(`[LOG] EQUIPE 1 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 2 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 3 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 4 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 5 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 6 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 7 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 8 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 9 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 10 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 11 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 12 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 13 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 14 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 15 CHANGED ${message.author}`);
    logChannel.send(`[LOG] EQUIPE 16 CHANGED ${message.author}`);
    
        



  });

  });

  });

  });

  });

  });

  });

  });

  });

  });

  });

  });

  });

  });

  });

  });

  
 


}

module.exports.help = {
    name: "duos"
  }

  /**
   * let nameTeam1 = team1.first().content;

    bot.channels.get(channelTeam1).setName('Team 1 : ' + nameTeam1);
   */


   /*
  //message deleted
  await message.delete();

  //filter id
  const filter = m => m.author.id === message.author.id;

  //team 1
  message.reply("Entrer le nom de la première team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team1 => {
    team1.delete(15000);
    if (team1.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la deuxième team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team2 => {
    team2.delete(15000);
    if (team2.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la troisième team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team3 => {
    team3.delete(15000);
    if (team3.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 4ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team4 => {
    team4.delete(15000);
    if (team4.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 5ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team5 => {
    team5.delete(15000);
    if (team5.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 6ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team6 => {
    team6.delete(15000);
    if (team6.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 7ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team7 => {
    team7.delete(15000);
    if (team7.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 8ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team8 => {
    team8.delete(15000);
    if (team8.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 9ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team9 => {
    team9.delete(15000);
    if (team9.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 10ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team10 => {
    team10.delete(15000);
    if (team10.first().content === 'cancel') {
      return message.reply("Annulé.");
    }


    message.reply("Entrer le nom de la 11ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team11 => {
    team11.delete(15000);
    if (team11.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 12ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team12 => {
    team12.delete(15000);
    if (team12.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 13ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team13 => {
    team13.delete(15000);
    if (team13.first().content === 'cancel') {
      return message.reply("Annulé.");
    }


    message.reply("Entrer le nom de la 14ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team14 => {
    team14.delete(15000);
    if (team14.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 15ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team15 => {
    team15.delete(15000);
    if (team15.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    message.reply("Entrer le nom de la 16ème team .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(team16 => {
    team16.delete(15000);
    if (team16.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    let nameTeam1 = team1.first().content;
    let nameTeam2 = team2.first().content;
    let nameTeam3 = team3.first().content;
    let nameTeam4 = team4.first().content;
    let nameTeam5 = team5.first().content;
    let nameTeam6 = team6.first().content;
    let nameTeam7 = team7.first().content;
    let nameTeam8 = team8.first().content;
    let nameTeam9 = team9.first().content;
    let nameTeam10 = team10.first().content;
    let nameTeam11 = team11.first().content;
    let nameTeam12 = team12.first().content;
    let nameTeam13 = team13.first().content;
    let nameTeam14 = team14.first().content;
    let nameTeam15 = team15.first().content;
    let nameTeam16 = team16.first().content;

    bot.channels.get(channelTeam1).setName('Team 1 : ' + nameTeam1);
    bot.channels.get(channelTeam2).setName('Team 2 : ' + nameTeam2);
    bot.channels.get(channelTeam3).setName('Team 3 : ' + nameTeam3);
    bot.channels.get(channelTeam4).setName('Team 4 : ' + nameTeam4);
    bot.channels.get(channelTeam5).setName('Team 5 : ' + nameTeam5);
    bot.channels.get(channelTeam6).setName('Team 6 : ' + nameTeam6);
    bot.channels.get(channelTeam7).setName('Team 7 : ' + nameTeam7);
    bot.channels.get(channelTeam8).setName('Team 8 : ' + nameTeam8);
    bot.channels.get(channelTeam9).setName('Team 9 : ' + nameTeam9 );
    bot.channels.get(channelTeam10).setName('Team 10 : '  + nameTeam10);
    bot.channels.get(channelTeam11).setName('Team 11 : '  + nameTeam11);
    bot.channels.get(channelTeam12).setName('Team 12 : '  + nameTeam12);
    bot.channels.get(channelTeam13).setName('Team 13 : ' + nameTeam13 );
    bot.channels.get(channelTeam14).setName('Team 14 : ' + nameTeam14 );
    bot.channels.get(channelTeam15).setName('Team 15 : ' + nameTeam15 );
    bot.channels.get(channelTeam16).setName('Team 16 : ' + nameTeam16 );


  });

  });

  });

  });

  });

  });

  });

  });

  });

  });

  });

  });

  });

  });

  });

  });*/

  /*if(!message.channel.permissionsFor(message.member).hasPermission("MANAGE_CHANNELS")) {
    message.delete();
    return;
}

    bot.channels.get(channelTeam1).setName('Equipe 1 : ' + args[0]);
    bot.channels.get(channelTeam2).setName('Equipe 2 : ' + args[1]);
    bot.channels.get(channelTeam3).setName('Equipe 3 : ' + args[2]);
    bot.channels.get(channelTeam4).setName('Equipe 4 : ' + args[3]);
    bot.channels.get(channelTeam5).setName('Equipe 5 : ' + args[4]);
    bot.channels.get(channelTeam6).setName('Equipe 6 : ' + args[5]);
    bot.channels.get(channelTeam7).setName('Equipe 7 : ' + args[6]);
    bot.channels.get(channelTeam8).setName('Equipe 8 : ' + args[7]);
    bot.channels.get(channelTeam9).setName('Equipe 9 : ' + args[8] );
    bot.channels.get(channelTeam10).setName('Equipe 10 : '  + args[9]);
    bot.channels.get(channelTeam11).setName('Equipe 11 : '  + args[10]);
    bot.channels.get(channelTeam12).setName('Equipe 12 : '  + args[11]);
    bot.channels.get(channelTeam13).setName('Equipe 13 : ' + args[12] );
    bot.channels.get(channelTeam14).setName('Equipe 14 : ' + args[13] );
    bot.channels.get(channelTeam15).setName('Equipe 15 : ' + args[14] );
    bot.channels.get(channelTeam16).setName('Equipe 16 : ' + args[15]);*/
