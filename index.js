const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('welcome', 'Welcome');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
    console.log('I am ready to command!');
  });
  
bot.login(process.env.NDcyMTM4MjY4NDExMDM1NjQ4.DjvNyQ.X9htLNf_AQgg353NrFACJNlx9CQ);
