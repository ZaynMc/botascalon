const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops, tools) => {

  const filter = (reaction, user) => ['one', 'two','three',
'four'].includes(reaction.emoji.name) && user.id == message.author.id;

const embed = new Discord.RichEmbed()
  .setTitle('Tournois')
  .setColor(0xdd9323)
  .setFooter(`ID : ${message.author.id}`);

  message.channel.send(embed).then(msg => {

    msg.react("👍");
    //msg.react('2️⃣');
    //msg.react('3️⃣');
    //msg.react('4️⃣');

    msg.awaitReactions(filter,{
      max: 1,
      time: 30000,
      errors: ['time']
    }).then(collected => {
      message.channel.send("check 2");
      const reaction = collected.first();

      switch (reaction.emoji.name) {
        case 'thumbsup':
        msg.channel.awaitMessage(filter, {
          max: 1,
          time: 10000
        }).then(collected => {
          message.channel.send("check 2");

        });

        break;
      }
    });
    });

}

module.exports.help = {
  name: "tournoismanager"
}
