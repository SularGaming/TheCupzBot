const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

var reeses = [
  "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F03%2Freeses-2.jpg%3Fw%3D2000&w=700&q=85",
  "http://965kvki.com/files/2017/09/Reeses-Peanut-Butter-Cup.jpg?w=980&q=75",
  "http://media.pennlive.com/food/photo/reeses-peanut-butter-cups-8e3503d9ab94ecfc.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNfKWAW1bDS2MW8iOYL3Hj2SAyd-LDDvlwryECLQVxGn7Csua",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDCrTuUwBcgGAoqGF9hIFd_sdXRNqisi_K8kx3YiPQqSl8hnodg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaqH-IP9RoNYIOYcMjWZwYkTCq8FxoWNHhrReI4KJo5lcAaZV",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_nplnaQRyRuDiCFga_86i1DIeSRoAGCPoL3I0abOVP61Sy_kwg",
  "https://tribwpix.files.wordpress.com/2017/09/reeses_peanut_butter_cups_fb.jpg?quality=85&strip=all",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS724P21xno3xNiGSBbZkPvXSuhPn2_is24O3OTAvzGJuSQpnp8pw",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcmRspa2xDsAR1khIkAUmrvP8rwydA-nhYCKU8FxNXqnsyLp_pg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZFgVd---S9wYBB1CjHa7oqlw3EWBGhP6xfkG5-n29UFO2ZoSX",
  "https://imgix.ranker.com/user_node_img/50059/1001176081/original/o-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces",
  "https://i.imgflip.com/19zagf.jpg",
  "https://pics.me.me/there-has-beena-major-recall-on-reeses-cups-2-peanut-26605829.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbsoXIEAUj60GDwjt2Edm1okfBVcyK-mXgj6bvOWjTKoYamCG8yw",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKKNS5X_Fu7x0q5smfkR4h0hCRj5oDGGnxj3aF5j9KxOpn3njKg",
  "https://www.rachaelraymag.com/.image/t_share/MTUwMTQwNzU0MTkzNDI1OTIz/mega-reeses-peanut-butter-cup-tart-103121920.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZoItYRTgyMzyUVJSAJFZ0zFiV_tO7YFm_neAFSARcjSlvEzqwg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLtGBKRuLTbgk8sqxIHw66bausFqC5G6Pg7Ko3i2vhbxLAoHKmkg",
  "https://www.jokejive.com/images/jokejive/45/45f704584d1a053500161f15028b8860.jpeg",
  "http://www.stickpng.com/assets/images/580b57fbd9996e24bc43c0c4.png"
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
      .addField("Hello my name is CupzBot.")
      .addField("https://twitch.tv/lil_cupz")
      .addField("Follow me on twitch!")
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
