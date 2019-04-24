const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args, ops, tools) => {

  //!mute @user 1s/m/h/d

  message.delete();

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return;

  if(tomute.hasPermission("MANAGE_MESSAGES"))return;
  let muterole = message.guild.roles.find(`name`, 'muted');
  //start of create role
  if(!muterole){
    try{

      tools.log("CREATE ROLE MUTED....", message);

      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          SPEAK: false

        });

      });
    }catch(e){
      console.log(e.stack);
    }
  }
  tools.log("CREATE ROLE MUTED ✅", message);
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Vous n'avez pas précisez le temps.").then(message => message.delete(5000));

  await(tomute.addRole(muterole.id));
  //message.reply(`<@${tomute.id}> à été mute pour ${ms(ms(mutetime))}`).then(message => message.delete(5000));;

  const joinChannel = message.member.guild.channels.find('name', 'history-bot');
  joinChannel.send({embed: {
    color: 3447003,
    author: {
      name: "ASCALON BOT",
      icon_url: "https://i.imgur.com/r1T3PbX.png"
    },
    title: `Le joueur ${tomute.user.username} à été mute pour ${ms(ms(mutetime))}`,
    timestamp: new Date(),
    footer: {
      icon_url: "https://i.imgur.com/318H4Xw.png",
      text: "© Created by Zayn#0607"
    }
  }
});


  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "ASCALON BOT",
      icon_url: "https://i.imgur.com/r1T3PbX.png"
    },
    title: `Le joueur ${tomute.user.username} est mute pour ${ms(ms(mutetime))}`,
    timestamp: new Date(),
    footer: {
      icon_url: "https://i.imgur.com/318H4Xw.png",
      text: "© Created by Zayn#0607"
    }
  }
}).then(message => message.delete(30000));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    //message.channel.send(`<@${tomute.id}> est unmute !`).then(message => message.delete(5000));;

    const log = message.member.guild.channels.find('name', 'history-bot');
    log.send({embed: {
    color: 3447003,
    author: {
      name: "ASCALON BOT",
      icon_url: "https://i.imgur.com/r1T3PbX.png"
    },
    title: `Le joueur ${tomute.user.username} à été unmute`,
    timestamp: new Date(),
    footer: {
      icon_url: "https://i.imgur.com/318H4Xw.png",
      text: "© Created by Zayn#0607"
    }
  }
});

    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "ASCALON BOT",
        icon_url: "https://i.imgur.com/r1T3PbX.png"
      },
      title: `Le joueur ${tomute.user.username} est unmute !`,
      timestamp: new Date(),
      footer: {
        icon_url: "https://i.imgur.com/318H4Xw.png",
        text: "© Created by Zayn#0607"
      }
    }
  }).then(message => message.delete(30000));
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "mute"
}
