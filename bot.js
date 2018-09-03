const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

var reeses = [
  "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F03%2Freeses-2.jpg%3Fw%3D2000&w=700&q=85"
];

client.on('ready', () => {
  client.user.setGame('Follow me on Twitch! | cupz! = Prefix! IN MAINTENANCE MODE!', "https://twitch.tv/lil_cupz");
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
      .addField("https://twitch.tv/lil_cupz", true)
      .addField("Follow me on twitch!", true)
      .setColor(0x00FFFF)
    message.channel.sendEmbed(embed);
  }

if(command === "reeses") {
  message.channel.sendMessage(reeses[Math.floor(Math.random() * reeses.length)]);
}
  
//  /n == New line
//  you can even do message.channel.sendMessage("```Hello```");

});

setInterval(() => {
  http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);
