const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  try{

 message.guild.createRole({
name: "JOUEUR TOURNOIS",
color: "#00ff00",
permissions:[]
})
}catch(e){
console.log(e.stack);

}

  const filter = m => m.author.id == message.author.id;
  message.reply("Choissez la date (exemple : 01/01/2000)").then(r => delete(10000));
  message.channel.awaitMessages(filter, {max: 1,time: 10000})
  .then(collected => {

    if(collected.first().content == "cancel") {
      return message.reply("Canceled");
    }

    let date = collected.first().content;

    message.reply("Choissez l'heure (exemple : 15h60)").then(r => delete(10000));

    const filter1 = m => m.author.id == message.author.id;
    message.channel.awaitMessages(filter1, {max: 1,time:10000})
    .then(collected1 => {

      if(collected1.first().content == "cancel") {
        return message.reply("Canceled");
      }

        let heure = collected1.first().content;

      const solotournoi = message.member.guild.channels.find('name', '🌀inscription-solo-off');
      solotournoi.send(`📣 ANNONCE TOURNOI 📣\nMode : **SOLO**\nPlatforme : **TOUS [Pc, Xbox, PS4]**\nDate du tournoi : ${date} à ${heure}\n \nComment s'inscire ? Il suffit juste de réagir avec cette réaction ✅ au message !`).then(msg => {
        msg.react("✅");
      });
    }).catch(err => {
      console.log(err);
    });

  }).catch(err => {
    console.log(err);
  });

}

module.exports.help = {
  name: "solo"
}
