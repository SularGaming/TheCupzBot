const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  client.user.setGame('Follow me on Twitch! | cupz! = Prefix! IN MAINTENANCE MODE!', "https://twitch.tv/toastwastaken");
  console.log('Hello');
});
  
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === "info") {
    var embed = new Discord.RichEmbed()
      .setThumbnail(message.client.avatarURL)
      .addField("Hello my name is CupzBot.", true)
      .addField("https://twitch.tv/lilcupz", true)
      .setColor(0x00FFFF)
    message.channel.sendEmbed(embed);
  }

//  /n == New line
//  you can even do message.channel.sendMessage("```Hello```");

});

setInterval(() => {
  http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);
