
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(!) || message.author.bot) return;

  if (message.content.startsWith(! + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(! + "foo")) {
    message.channel.send("bar!");
  } else
  if (message.content.startsWith(! + "colorized")) {
    message.channel.send("https://goo.gl/z39Eh9");
  } else
  if (message.content.startsWith(! + "rekt")) {
    message.channel.send("YOU JUST GOT REKT SON!!!");
  } else
  if (message.content.startsWith(! + "info")) {
    message.channel.send("This Bot is nowhere near done. Chimo is constantly adding stuff for you to enjoy.Leave 10000 Likes. Press F for Respect");
  } else
  if (message.content.startsWith(! + "help")) {
    message.channel.send("this is a list of commands http://collabedit.com/5qxb7");
  } 
});

client.login(process.env.BOT_TOKEN);
