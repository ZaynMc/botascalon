const ytdl = require('ytdl-core');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

   // if(!message.member.voiceChannel) return;

   let muterole = message.guild.roles.find(`name`, "Rythm");

   try{

    message.guild.channels.forEach(async (channel, id) => {
      await channel.overwritePermissions(muterole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        
      });
    });
  }catch(e){
    console.log(e.stack);
  }

   //if(message.guild.me.voiceChannel) return message.channel.send('Désolée mais le bot est déjà dans votre channel.');

   /*var VC = message.member.voiceChannel;
   if (!VC)
       return;
    VC.join()
   .then(connection => {
       const dispatcher = connection.playFile('./voice/MATCH1MINUTES.wav');
       dispatcher.on("end", end => {VC.leave()});
   })
   .catch(console.error);
};
*/
}


module.exports.help = {
    name: "proute"
  }