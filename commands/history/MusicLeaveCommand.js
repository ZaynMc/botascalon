const ytdl = require('ytdl-core');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

   if(!message.member.voiceChannel) return message.channel.send("Connectez vous dans le channel vocal du bot");

   if(!message.guild.me.voiceChannel) return message.channel.send("Désolée, le bot n'est pas connecté dans un channel vocal.");

   if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("Désolée mais vous êtes connecteer dans un channel différent du bot.");

   //LEAVE CHANNEL
   message.guild.me.voiceChannel.leave();
   
   const logChannel = message.member.guild.channels.find('name', 'history-bot');;
    logChannel.send(`[LOG] BOT QUIT CHANNEL ${message.channel.name}`);

   message.channel.send("Le bot quitte le channel...");
}

module.exports.help = {
    name: "quit"
}
