const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

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

if(command === "memepic") {
  message.channel.sendMessage(memepic[Math.floor(Math.random() * memepic.length)]);
}

var memepic = [
	"http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-meme-pics.jpg",
	"https://i.pinimg.com/736x/4d/c1/cc/4dc1cc0fbc8b2df90634df5f1a624ed1--pretty-things-things-i-love.jpg",
	"https://i.ytimg.com/vi/uezUVaVCxjs/maxresdefault.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-memes-hilarious.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-meme-collection.jpg",
	"https://i.pinimg.com/236x/a7/d1/2c/a7d12cf784efbf18c7da44bafea94361--ironic-quotes-quotes-so-true.jpg",
	"https://i.pinimg.com/736x/d6/09/e2/d609e22384ddd556414b27644053dea3--big-words-cool-words.jpg",
	"https://i.pinimg.com/736x/65/fe/35/65fe357925092930409c5bd1bbdf7793--funny-food-memes-humor-memes.jpg",
	"https://www.funnypica.com/wp-content/uploads/2015/05/Funny-Memes-12-570x641.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/a6/55/18/a6551844efa2f043b69e175d1bf0d83e.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/6a/f6/fb/6af6fb6b67a56d57ad95ac6848354bec.jpg",
	"https://funnymemes.co/memes/Life_is_Like_a_Box_of_Chocolates_Funny_Meme.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2016/12/30-In-Real-Life-Memes-2-Real-Life-Funny-Memes.jpg",
	"https://funnymemes.co/memes/Your_Crush_Is_Behind_You_Funny_Meme.jpg",
	"https://i.pinimg.com/736x/28/3d/1d/283d1d5648c027afa6cdb6c9535ce152--funny-monday-memes-monday-quotes.jpg",
	"https://i.pinimg.com/736x/a6/55/18/a6551844efa2f043b69e175d1bf0d83e--so-funny-funny-shit.jpg",
	"https://i.pinimg.com/736x/55/43/94/554394f9a01b34093435c3cac157433f--funny-girl-memes-funny-memes-about-life.jpg",
	"https://lh3.googleusercontent.com/ayR8RBlecNTMziYrSYpuoG4yS7a8KMfPQDYqtiNw8vY6mgB4RGr555peMpjy3WRTxQ=h310",
	"https://i.pinimg.com/736x/78/70/ae/7870ae0798fa9c93ee4bde7ebc756177--online-casino-bonus-lol-funny-pictures.jpg",
	"https://s-media-cache-ak0.pinimg.com/originals/2d/d8/e2/2dd8e2c93967b62f275991a6044695ab.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2014/11/Best-funny-Memes-collection.jpg",
	"https://i.pinimg.com/736x/e0/06/6c/e0066c0c7f8f128a38b5732f15349bd1--funny-comments-funny-stuff.jpg",
	"https://i.pinimg.com/736x/f8/4f/7e/f84f7e3932b9f09a067b5fb224f1b654--funniest-memes-funny-jokes.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2014/11/Most-Funny-Memes-Humor.jpg",
	"https://s-media-cache-ak0.pinimg.com/originals/5b/e3/90/5be3902970a2eabc0433caeca1b2f3da.jpg",
	"https://s-media-cache-ak0.pinimg.com/originals/fb/7c/04/fb7c0481989959838c21d9798873f461.jpg",
	"https://i.pinimg.com/736x/ab/de/c4/abdec49c547d55604ec4c802a8b19423--toilet-ideas-funny-medical.jpg",
	"https://i.pinimg.com/736x/cc/29/d7/cc29d7d55a15091b05f873cc879eda55--halloween-ideas-funniest-memes.jpg",
	"https://i.pinimg.com/236x/3d/d1/71/3dd1710cbdf760f6fbacc380667f63f6--donald-trump-funny-memes.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2015/07/Top-25-Funny-Memes.jpg",
	"https://s-media-cache-ak0.pinimg.com/originals/1e/87/4e/1e874e55e9185e30fb1dedfc01cab0f8.jpg",
	"https://i.pinimg.com/736x/fd/6d/2b/fd6d2b1daa8133150e8c88c3c07e3178--funny-asian-memes-funny-memes.jpg",
	"https://i.pinimg.com/736x/3a/a9/89/3aa9892fec54a038fad612babbfde552--laugh-quotes-funniest-memes.jpg",
	"https://i.pinimg.com/736x/09/5d/de/095dde57ed99b3879eda68199bbc3aad.jpg",
	"https://i.pinimg.com/736x/27/5d/84/275d84b3ada01a03db88204aa84e9ee6--funny-facts-lol-funny.jpg",
	"https://i.pinimg.com/736x/36/c6/8e/36c68e200adb17bcf8fb17123356e092--cute-memes-funny-memes.jpg",
	"https://i.pinimg.com/736x/3f/36/d0/3f36d0a870adb56a63baafcc9a0cf86a--funny-meme-pictures-funny-memes.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxu62HNVXpwLT3dVyuXK9uXxKqY07XOZP72hc_0bLUM1aDKKO",
	"https://i.pinimg.com/736x/5c/71/89/5c718951eee8e8b08bb212ad99122124--funny-qoutes-funny-memes.jpg",
	"https://i.pinimg.com/736x/75/27/df/7527dfe8ab2e6ced4f52a0f928659037--so-funny-funny-memes.jpg",
	"https://i.pinimg.com/736x/ca/2a/d8/ca2ad89390ad7b26f869fa78e9d8e66e--snapchat-funny-humor-snapchat-memes.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/b2/f5/3a/b2f53a63031cf03b37c02f1bf0eead43--funny-shit-funny-stuff.jpg",
	"https://i.pinimg.com/736x/87/72/b8/8772b8a9a45ff7bd52e969af452ab680--funny-call-of-duty-memes-funny-gamer-memes.jpg",
	"https://i.pinimg.com/736x/b8/ce/45/b8ce45cadffe168e82646b8973fd074e--lil-debbie-funny-memes.jpg",
	"http://quotesnhumor.com/wp-content/uploads/2016/04/30-Funniest-Memes-24-Funny-Memes.jpg",
	"https://i.pinimg.com/736x/78/b8/02/78b8026cfb006e7c5bc5e2d05c5617b6--funny-sports-memes-nfl-memes.jpg"
];
  
//  /n == New line
//  you can even do message.channel.sendMessage("```Hello```");

});

setInterval(() => {
  http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);
