const ytdl = require('ytdl-core');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    if(!message.member.voiceChannel) return message.channel.send('Connectez vous à un channel audio.');

   //if(message.guild.me.voiceChannel) return message.channel.send('Désolée mais le bot est déjà dans votre channel.');

    if(!args[0]) return message.channel.send('Désolée, entrée une url | **a!play <url>**.');

    let validate = await ytdl.validateURL(args[0]);

    if(!validate) return message.channel.send('Désolée, veuillez entrer une **url valide**.');

    let info = await ytdl.getInfo(args[0]);

    if(message.guild.me.voiceChannel) {
        let connection = await message.member.voiceChannel.join();
        let dispatcher = await connection.playStream(ytdl(args[0], {filter: 'audioonly'}));
        message.channel.send( `Music song : ${info.title}`);
        const logChannel = message.member.guild.channels.find('name', 'history-bot');
        logChannel.send(`[LOG] MUSIC PLAY ${info.title}`);

        return;
    }

    let connection = await message.member.voiceChannel.join();

    var VC = message.member.voiceChannel;

    let dispatcher = await connection.playStream(ytdl(args[0], {filter: 'audioonly'}));

    message.channel.send( `Music song : ${info.title}`);

    dispatcher.on("end", end => {VC.leave()});
}


module.exports.help = {
    name: "play"
  }
