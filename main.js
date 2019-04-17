/**
 * CREATE_INSTANT_INVITE	0x00000001	Allows creation of instant invites	T, V
KICK_MEMBERS *	0x00000002	Allows kicking members
BAN_MEMBERS *	0x00000004	Allows banning members
ADMINISTRATOR *	0x00000008	Allows all permissions and bypasses channel permission overwrites
MANAGE_CHANNELS *	0x00000010	Allows management and editing of channels	T, V
MANAGE_GUILD *	0x00000020	Allows management and editing of the guild
ADD_REACTIONS	0x00000040	Allows for the addition of reactions to messages	T
VIEW_AUDIT_LOG	0x00000080	Allows for viewing of audit logs
VIEW_CHANNEL	0x00000400	Allows guild members to view a channel, which includes reading messages in text channels	T, V
SEND_MESSAGES	0x00000800	Allows for sending messages in a channel	T
SEND_TTS_MESSAGES	0x00001000	Allows for sending of /tts messages	T
MANAGE_MESSAGES *	0x00002000	Allows for deletion of other users messages	T
EMBED_LINKS	0x00004000	Links sent by users with this permission will be auto-embedded	T
ATTACH_FILES	0x00008000	Allows for uploading images and files	T
READ_MESSAGE_HISTORY	0x00010000	Allows for reading of message history	T
MENTION_EVERYONE	0x00020000	Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel	T
USE_EXTERNAL_EMOJIS	0x00040000	Allows the usage of custom emojis from other servers	T
CONNECT	0x00100000	Allows for joining of a voice channel	V
SPEAK	0x00200000	Allows for speaking in a voice channel	V
MUTE_MEMBERS	0x00400000	Allows for muting members in a voice channel	V
DEAFEN_MEMBERS	0x00800000	Allows for deafening of members in a voice channel	V
MOVE_MEMBERS	0x01000000	Allows for moving of members between voice channels	V
USE_VAD	0x02000000	Allows for using voice-activity-detection in a voice channel	V
PRIORITY_SPEAKER	0x00000100	Allows for using priority speaker in a voice channel	V
CHANGE_NICKNAME	0x04000000	Allows for modification of own nickname
MANAGE_NICKNAMES	0x08000000	Allows for modification of other users nicknames
MANAGE_ROLES *	0x10000000	Allows management and editing of roles	T, V
MANAGE_WEBHOOKS *	0x20000000	Allows management and editing of webhooks	T, V
MANAGE_EMOJIS *	0x40000000	Allows management and editing of emojis
 */

 const Discord = require("discord.js");
 const fs = require("fs");
 const bot = new Discord.Client({disableEveryone: true});
 bot.commands = new Discord.Collection();
 const token = process.env.token;
 const tools = require('./function.js');
 const db = require('quick.db');
 const ms = require("ms");

 const size = 12;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;

function changeColor() {
  for (let index = 0; index < 1; ++index) {
    bot.guilds.get("473833367029153794").roles.find('name', "Raimbow").setColor(rainbow[place])
		.catch(console.error);
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}
 const serverStats = {
   guildID: '511250353430462465',
   totalUsersID: '511251090097045526',
   memberCountID: '511251296054149141',
   botCountID: '511251340119244841'
 }

 fs.readdir("./commands/", (err, files) => {

   if(err) console.log(err);

   let jsfile = files.filter(f => f.split(".").pop() === "js")
   if(jsfile.length <= 0){
     console.log("Couldn't find commands.");
     return;
   }

   jsfile.forEach((f, i) =>{
     let props = require(`./commands/${f}`);
     console.log(`${f} loaded!`);
     bot.commands.set(props.help.name, props);
   });

 });

 bot.on("ready", async () => {

   //setInterval(changeColor, 60);
   console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

   //bot.user.setActivity("Obéir à mon maître", {type: "WATCHING"});

   bot.user.setActivity('@ZaynMC_YT', {type: "LISTENING"});
 });

 bot.on("message", async message => {
   //if(message.author.bot) return;
   if(message.channel.type === "dm") return;

    let ops = {
    }

   let prefix = "a!";
   let messageArray = message.content.split(" ");
   let cmd = messageArray[0];
   let args = messageArray.slice(1);

   let commandfile = bot.commands.get(cmd.slice(prefix.length));
   if(commandfile) commandfile.run(bot,message,args, ops, tools);

 });

 bot.on('messageReactionAdd', (reaction, user) => {

  if (user.id !== bot.user.id) {

    if(reaction.message.channel.name == "🌀inscription-solo-off"){
      if(reaction.emoji.name == "✅"){
        let users = bot.users.find("username", user.username);
        if(reaction.count > 17) {
          reaction.remove(user);
          users.send("Le tournoi est complet !");
          return;
        }
        console.log('ADD TOURNOI TO ' + user.username);
        let role = reaction.message.guild.roles.find(r => r.name === "JOUEUR TOURNOIS");

        role.setMentionable(true, 'Role needs to be pinged')
        .then(updated => console.log(`Role mentionable: ${updated.mentionable}`))
        .catch(console.error);

        // Set the position of the role
        role.setPosition(8)
        .then(updated => console.log(`Role position: ${updated.position}`))
        .catch(console.error);

          console.log(`Nope, noppers, nadda.`);
          let id = users.id;
          let member = reaction.message.member.guild.members.get(id);
          member.addRole(role);
          users.send(`Bonjour ${users} !\n\nVotre inscription au tournoi solo à été bien pris en compte !`);

          const joinChannel = bot.channels.find('name', 'log-bot');
        joinChannel.send(`[LOG] USER ${users} vient de s'inscrire au tournoi ! `);

      }
    }
}
});

bot.on('messageReactionAdd', (reaction, user) => {

  if (user.id !== bot.user.id) {

    if(reaction.message.channel.name == "🌀inscription-solo-off"){
      if(reaction.emoji.name == "✅"){
        let users = bot.users.find("username", user.username);
        console.log('REMOVE TOURNOI TO ' + user.username);
        let role = reaction.message.guild.roles.find(r => r.name === "JOUEUR TOURNOIS");

          console.log(`Nope, noppers, nadda.`);
          let id = users.id;
          let member = reaction.message.member.guild.members.get(id);
          member.removeRole(role);
          users.send(`Bonjour ${users} !\n\nVotre désinscription au tournoi solo à été bien pris en compte !`);

          const joinChannel = bot.channels.find('name', 'log-bot');
        joinChannel.send(`[LOG] USER ${users} vient de désinscrire au tournoi ! `);

      }
    }
}
});

bot.on('guildMemberAdd', member => {

    const joinChannel = member.guild.channels.find('name', '👐bienvenue');
    joinChannel.send(`Bienvenue ${member.user}, avant de te divertir sur **ASCALON** je t'invite à lire le règlement . Have Fun🎉🤗 !`);

    bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`); // total users
    //bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`); // total members (not inscued bot)
    bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`); // bot count

    let muterole = member.guild.roles.find(`name`, "💧 Ascalon 💧");
    member.addRole(muterole.id);
});

bot.on('guildMemberRemove', member => {

    bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`); // total users
    //bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`); // total members (not inscued bot)
    bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`); // bot count
});

bot.on("message", async message => {

  let recrutementteam = [`Nom de l'équipe`, 'Plateforme','Âge minimum','Rôles disponibles','Objectif','K/D minimum', 'Nombre de top1 minimum']
  let noFound = false;

  //CHANNEL RECRUTEMENT TEAM
  if(message.channel.id == "501869668919803904") {
    if(message.member.hasPermissions("ADMINISTRATOR")) {
        return;
    }

    for (var i in recrutementteam) {
    if (!message.content.toLowerCase().includes(recrutementteam[i].toLowerCase())) noFound = true;
  }
    if(noFound) {
      message.delete();

      message.author.send("Bonjour !\n \nVotre message dans le channel <#501869668919803904> ne respecte pas le modèle donné\n \nNous t'invitons à respecter le modèle ci-dessous lors de votre prochain post\n \n __Voici le formulaire à respecter pour publier son annonce : __ \n```Nom de l'équipe (avec brève description mais facultatif) :\nPlateforme :\nÂge minimum (indiquer l'âge minimum si nécessaire) :\nRôles disponibles (joueur, coach, modérateur, manager,etc...) :\nObjectif (snipe, tournoi, fun, ...) :\nK/D minimum (indiquer le K/D minimum si nécessaire) :```\n \nÂ bientôt !");
      return;
    }
    message.react("✅")
  }

});


bot.on("message", async message => {
  if(message.channel.type === "dm") return;

  // Part 1 : checking & removing the text
  //1 blacklisted words
let blacklisted = ['http', 'https'] //words put , after the word

//2 looking for words
let foundInText = false;
for (var i in blacklisted) { // loops through the blacklisted list
  if(message.channel.name == "🔴pub-no-discord" || message.member.hasPermission("MANAGE_MESSAGES")) return;
  

  if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
}
// checks casesensitive words

//3 deletes and send message
  if (foundInText) {
    //message delete
    message.delete();
    //message send to author
    message.author.send('La pub de discord sur le serveur ASCALON est interdite !');
    //message channel send to author for advertissment
    message.channel.send(`<@${message.author.id}> Bonjour, la pub de serveur discord est interdite. Dernière avertissement avant le ban`).then(message => message.delete(5000));

  }
});

bot.on("message", async message => {
  if(message.channel.type === "dm") return;

  // Part 1 : checking & removing the text
  //1 blacklisted words
let blacklisted = ['discord.gg'] //words put , after the word

//2 looking for words
let foundInText = false;
for (var i in blacklisted) { // loops through the blacklisted list
  if(message.channel.name == "👍partenariat" ||message.channel.name == "🤝échange-de-pub🤝" || message.channel.name == "👆petite-pub" || message.member.hasPermission("MANAGE_MESSAGES")) return;
  

  if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
}
// checks casesensitive words

//3 deletes and send message
  if (foundInText) {
    //message delete
    message.delete();
    //message send to author
    message.author.send('La pub de discord sur le serveur ASCALON est interdite !');
    //message channel send to author for advertissment
    message.channel.send(`<@${message.author.id}> Bonjour, la pub de serveur discord est interdite. Dernière avertissement avant le ban`).then(message => message.delete(5000));


  }

});
bot.on("message", async message => {

  if(message.author.bot) return;

  if(message.channel.type !== 'text') {

    let active = await db.fetch(`support_${message.author.id}`);

    let guild = bot.guilds.get('473833367029153794');

    let channel, found = true;

    try {
      if(active) bot.channels.get(active.channelID).guild;
    }catch(e) {
      found = false;
    }

    if(!active || !found) {

      active = {};

      channel = await guild.createChannel(`${message.author.username}-${message.author.discriminator}`);

      channel = await channel.setParent('531463499550031882');

      try {
            let ascalonall = guild.roles.find(`name`, "💧 Ascalon 💧");
            let moderationrole = guild.roles.find(`name`, "🌀 Modérateur 🌀");
            let respmodorole = guild.roles.find(`name`, "staff");


            channel.overwritePermissions(ascalonall, {
            CREATE_INSTANT_INVITE: false,
            KICK_MEMBERS: false,
            BAN_MEMBERS: false,
            ADMINISTRATOR: false,
            MANAGE_CHANNELS: false,
            MANAGE_GUILD: false,
            ADD_REACTIONS: false,
            VIEW_AUDIT_LOG: false,
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false
          });

          channel.overwritePermissions(moderationrole, {
          CREATE_INSTANT_INVITE: true,
          KICK_MEMBERS: true,
          BAN_MEMBERS: true,
          ADMINISTRATOR: true,
          MANAGE_CHANNELS: true,
          MANAGE_GUILD: true,
          ADD_REACTIONS: true,
          VIEW_AUDIT_LOG: true,
          VIEW_CHANNEL: true,
          SEND_MESSAGES: true
        });

        channel.overwritePermissions(respmodorole, {
        CREATE_INSTANT_INVITE: true,
        KICK_MEMBERS: true,
        BAN_MEMBERS: true,
        ADMINISTRATOR: true,
        MANAGE_CHANNELS: true,
        MANAGE_GUILD: true,
        ADD_REACTIONS: true,
        VIEW_AUDIT_LOG: true,
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
      });

        } catch(e){
          console.log(e.stack);
        }

      let author = message.author;

      const newChannel = new Discord.RichEmbed()
      .setColor(0x36393e)
      .setAuthor(author.tag)
      .setFooter('Support Ticket Created')
      .addField('User', author)
      .addField('ID', author.id)

      await channel.send(newChannel);

      author.send(":flag_mf: Merci d'avoir contacté le support ! Un membre du staff va vous contacter dans les plus brefs délais \n:flag_lr: Thank you for contacting the support ! A member of the staff will contact you as soon as possible");

      active.channelID = channel.id;
      active.targetID = author.id;

    }


    channel = bot.channels.get(active.channelID);

   // message.author.send(":flag_mf: Votre message a été envoyé \n:flag_lr: Your message has been sent");

    const embed = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(message.author.tag)
    .setDescription(message.content)
    .setFooter(`Message Recieved -- ${message.author.tag}`)

    await channel.send(embed);

    db.set(`support_${message.author.id}`, active);
    db.set(`supportChannel_${channel.id}`, message.author.id);
    return;
  }

  let support = await db.fetch(`supportChannel_${message.channel.id}`);

  if(support) {

    support = await db.fetch(`support_${support}`);

    let supportUser = bot.users.get(support.targetID);
    if(!supportUser) return message.channel.delete();

    if(message.content.toLowerCase() == "?ban") {

      message.channel.delete();

      db.delete(`support_${support.targetID}`);
      message.guild.member(supportUser).ban("Troll bot / Invite Discord");
      return;

    }

    if(message.content.toLowerCase() == '?complete') {

        message.channel.delete();

        db.delete(`support_${support.targetID}`);
        return;
        }

    bot.users.get(support.targetID).send(`**${message.member.displayName}** : ${message.content}`)
    message.delete();


    return message.channel.send(`**${message.member.displayName}** : ${message.content}`);
  }
  });

  /*const setupCMD = "!setreactionpp"
let initialMessage = `**:bell: __Réction Notification Partie Perso__ :bell:**`;
const roles = ["🔑 Notif PP"];
const reactions = ["🔑"];


if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
 
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`\n Réagie à l'émojii :key: pour avoir le grade : **"${role}"** !`); //DONT CHANGE THIS
    return messages;
}
 
 
bot.on("message", message => {

  // Check if a member has a specific permission on the guild!
    if (message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                }
            });
        }
    }
})
 
 
bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
       
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
       
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
       
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);
               
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj);
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }  
});*/
/* const setupCMD = "!createrolemessage"
let initialMessage = `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`;
const roles = ["Notif Boutique", "Notif Tournoi", "Notif PP", "Notif News", "Notif PUB", "Notif Sondages", "Notif Chroniques"];
const reactions = ["🛒", "🏅", "🔑", "📰", "📜", "🌐", "📄"];


if (roles.length !== reactions.length) throw ":bell: **__À quel(s) messages souhaites-tu être au courant ?__** :bell:";


function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(` \n Réagie à l'émojii pour avoir le grade : **"${role}"** !`);
    return messages;
}


bot.on("message", message => {
    if (message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})


bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});*/

  bot.login(token);