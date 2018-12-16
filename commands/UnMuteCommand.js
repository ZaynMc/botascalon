module.exports.run = async (bot, message, args, ops) => {

  message.delete();
  //CHECK IF MENTION USER EXIST
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return;

  if(tomute.hasPermission("MANAGE_MESSAGES")) return;
  let muterole = message.guild.roles.find(`name`, 'muted');

  if(message.member.roles.has(muterole.id)) {
    //REMOVE ROLE TO USER
    tomute.removeRole(muterole.id);
    //SEND MESSAGE FOR VALID UNMUTE
    message.channel.send(`<@${tomute.id}> est unmute !`).then(message => message.delete(5000));
} else {
  return;
}
}
