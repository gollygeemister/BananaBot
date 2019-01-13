const Discord = require('discord.js');
const Player = require("./Player.js");
const Lobby = require('./lobby.js');
const token = 'NTMyMzYzMTAwMDk2MTY3OTM3.DxbZcQ.-5nE-1-GoNn8vOldTKZgVR_dVQ0';

const client = new Discord.Client();

var lobby = new Lobby();

const fs = require("fs");

// Returns folders within specified directory
function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
  }

// load commands
client.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");

    if(jsfiles.length <= 0) return;
    
    jsfiles.forEach((f,i) => {
        let props = require(`./commands/${f}`);
        client.commands.set(props.help.name, props);
    });
});

client.on('ready', ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
    //client.channels.find(x => x.name === 'test').send('Hello, I\'m connected!');
});

client.on('message', async message => {

    let prefix = "!";
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = client.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(client, message, args);

    /*
    if (msg.content === "!test"){
        msg.channel.send(`Hello, ${msg.author}!`);
    }

    if (msg.content === "!showid"){
        msg.channel.send(`Your ID is ${msg.author.id}`);
    }

    ////////////END OF DEBUG COMMANDS///////////
    if (msg.content === "!help"){
        const embed = new Discord.RichEmbed()
            .setTitle("COMMANDS")
            .setDescription("All commands available")
            .addField("!roll", "Roll a number 0-100", true)
            .addField("!flip", "Flip a coin", true)
            .addField("!join", "Join lobby for current game", true)
            .addField("!showtokens", "Displays your tokens", true)
            .addField("!showall", "Show all players in a lobby", true)
        msg.channel.send(embed);
    }

    if (msg.content === "!roll"){
        msg.channel.send(`${msg.author} rolled: ` + Math.floor(Math.random() * 101));
    }

    if (msg.content === "!flip"){
        var randomNum = Math.random();
        if (randomNum > .5){
            msg.channel.send("Heads!");
        }
        else {
            msg.channel.send("Tails!");
        }
    }

    if (msg.content === "!join") {
        if(!lobby.playerExists(msg.author.id)){
            lobby.addPlayer(msg.author.id, new Player(msg.author.username, msg.author.id));
            msg.channel.send(`${msg.author} has joined the lobby`);
        }
        else{
            msg.channel.send(`${msg.author} has already joined!`);
        }
    }

    if (msg.content === "!showtokens"){
        if (lobby.playerExists(msg.author.id)){
            var player = lobby.getPlayer(msg.author.id);
            msg.channel.send(`${player.getAuthor()} has ${player.getTokens()} tokens.`);
        }
    }

    if (msg.content === "!showall"){

        const embed = new Discord.RichEmbed()
            .setTitle("Players")
            .setDescription("All Players In Lobby");
        var playerIterator = lobby.getAllPlayers();
        var player = playerIterator.next();
        while(!player.done){
            embed.addField(player.value[1].getName(), `${player.value[1].getTokens()} tokens`, true);
            player = playerIterator.next();
        }
        msg.channel.send(embed);
    }
    */

});

client.login(token);