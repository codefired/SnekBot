const Discord = require('discord.js');
const dotenv = require('dotenv');
const client = new Discord.Client();
// Configure the .env information and put it in process.env
dotenv.config();
/* 
THE BOT COMMANDS
*/
client.once('ready', () => {
	console.log('Ready!');
});
// Login with the secret token in .env
client.login(process.env.TOKEN);