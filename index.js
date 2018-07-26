const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('welcome', 'Welcome');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
    console.log('I am ready to command!');
  });
  
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
bot.login(process.env.NDcyMTM4MjY4NDExMDM1NjQ4.DjvNyQ.X9htLNf_AQgg353NrFACJNlx9CQ);
