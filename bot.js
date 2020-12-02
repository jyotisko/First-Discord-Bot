require('dotenv').config();
const Discord = require('discord.js');


const client = new Discord.Client();

client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`));
client.on('message', msg => {
  // if (msg.content === '!ping') msg.reply('Pong!'); // Send a message tagging the user.
  if (msg.content === '!ping') msg.channel.send('Pong!'); // Send a message WITHOUT tagging the user.
  if (msg.content === '!mod-me') msg.member.roles.add('783672582124994580'); // Set a role the user who typed the command.
  if (msg.content === 'Hello Bot') msg.react('😀') // React to a message.
});

client.login(process.env.BOT_TOKEN);

