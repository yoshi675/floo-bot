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
    channel.send(`Hello, ${member}!! :) Welcome to the StreamFluence Discord Server. I want to make sure we get you set up correctly. Are you a Streamer or a Brand?\n\nType "A" for Streamer\nOR\nType "B" for Brand`);

  });

//event listener for messages 
bot.on('message', (message, user) => {
  //Finds user name to mention
  var user = message.author.toString(); 
  //Sends message to test-1 channel
  const channel = message.guild.channels.find('name', 'test-1');
  //Listens for 'A'
  if(message.content.toUpperCase() == ('A')) {
    //Sends the streamer notiication mentioning the StreamFluence employee
    channel.send('Awesome ' + user + '! It looks like you are a Streamer. <@276818612054917120> will give you access soon. If you have any questions, he will be the best to ask. Thanks!');
  } else if(message.content.toUpperCase() ==  ('B')) {
    //Send the brand notification mentioning the StreamFluence employee 
    channel.send('Awesome ' + user + '! It looks like you are a Brand. <@138706706317180928> will give you access soon. If you have any questions, he will be the best to ask. Thanks!');
  }

});

bot.login(process.env.token);
