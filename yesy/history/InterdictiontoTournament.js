const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    //!tempmute @user 1s/m/h/d

    message.delete();

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return;

    if(tomute.hasPermission("MANAGE_MESSAGES")) return;
    let muterole = message.guild.roles.find(`name`, "NoTournament");
    //start of create role
    if(!muterole){
      try{

        muterole = await message.guild.createRole({
          name: "NoTournament",
          color: "#000000",
          permissions:[]
        })
        const inscriptionSoloChannel = message.member.guild.channels.find('id', '511210802712412170');
        const inscriptionDuoChannel = message.member.guild.channels.find('id', '511210802712412170');
        inscriptionSoloChannel.send(`Veuillez respecter cette commande pour vous inscrire : a!inscriptionduo <votre team>`);

              let muterole = message.guild.roles.find(`name`, "NoTournament");

              inscriptionSoloChannel.overwritePermissions(muterole, {
              SEND_MESSAGES: true
            });
      }catch(e){
        console.log(e.stack);
      }

      try {

      inscriptionDuoChannel.overwritePermissions(muterole, {
      SEND_MESSAGES: true
    });
}catch(e){
console.log(e.stack);
}
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.channel.send("Vous n'avez pas précisez le temps.").then(message => message.delete(5000));

    await(tomute.addRole(muterole.id));
    const logChannel = message.member.guild.channels.find('name', 'history-bot');
    logChannel.send(`[LOG] MUTED PLAYER <@${tomute.id}>`);
    message.reply(`<@${tomute.id}> à été mute pour ${ms(ms(mutetime))}`).then(message => message.delete(5000));;

    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> est unmute !`).then(message => message.delete(5000));;
    }, ms(mutetime));


  //end of module
  }


module.exports.help = {
    //COMMAND
    name: "notournament"
  }
