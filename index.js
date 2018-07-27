 const Discord = require('discord.js');
  const bot = new Discord.Client();
  
 // checks to ensure bot is running, will only run after ready message is recieved in the console 
  bot.on('ready', () => {
    console.log('Floo bot is on and ready to welcome!');
   bot.user.setActivity(`Hello there!`);
  });
  
  
  //event listener for new guild members
  bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'test-1');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member} \n Please answer the question:\n A: I am a streamer\n B: I am a brand`);

  });

//event listener for messages 
bot.on('message', (message, user) => {
  //Finds user name to mention
  var user = message.author.toString(); 
  //Sends message to test-1 channel
  const channel = message.guild.channels.find('name', 'test-1');
  //Listens for 'A'
  if(message.content.toUpperCase() == 'A') {
    //Sends the streamer notiication mentioning the StreamFluence employee
    channel.send( user + 'You are a Streamer ! <@178249925165842440> will be with you shortly!');
  } else if(message.content.toUpperCase() ==  ('B')) {
    //Send the brand notification mentioning the StreamFluence employee 
    channel.send(user +  '!You are a brand! <@178249925165842440> will be with you shortly!');
  }

});

bot.login(process.env.token);
