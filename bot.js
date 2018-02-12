
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const DiscordClient = require('discord.io');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(config.prefix + "foo")) {
    message.channel.send("bar!");
  } else
  if (message.content.startsWith(config.prefix + "colorized")) {
    message.channel.send("https://goo.gl/z39Eh9");
  } else
  if (message.content.startsWith(config.prefix + "rekt")) {
    message.channel.send("YOU JUST GOT REKT SON!!!");
  } else
  if (message.content.startsWith(config.prefix + "info")) {
    message.channel.send("This Bot is nowhere near done. Chimo is constantly adding stuff for you to enjoy.Leave 10000 Likes. Press F for Respect");
  } else
  if (message.content.startsWith(config.prefix + "help")) {
    message.channel.send("this is a list of commands http://collabedit.com/5qxb7");
  } else
  if (message.content.startsWith(config.prefix + "gspaghet")) {
    client.user.setGame('With Chimos Spaghet')
  } else
client.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!fat") { // command to trigger
      var interval = setInterval (function (){
        bot.sendMessage({
          to: 384725328909828108,
          message: "@Green Seagull#9036 u a fat fuck" // message to send
        });
      }, 8,64e+7); // time between each interval in milliseconds
  }
});

client.login(config.token);
