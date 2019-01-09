const Discord = require('discord.js');
const Player = require("./Player.js");
const Lobby = require('./lobby.js');
const token = 'NTMyMzYzMTAwMDk2MTY3OTM3.DxbZcQ.-5nE-1-GoNn8vOldTKZgVR_dVQ0';

const client = new Discord.Client();
lobby = new Lobby();

client.on('ready', ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
    //client.channels.find(x => x.name === 'test').send('Hello, I\'m connected!');
});

client.on('message', (msg) => {

    if (msg.content === "!test"){
        msg.channel.send(`Hello, ${msg.author}!`);
    }

    if (msg.content === "!help"){
        const embed = new Discord.RichEmbed()
        .setTitle("COMMANDS")
        .setDescription("All commands available")
        .addField("!roll", "Roll a number 0-100", true)
        .addField("!flip", "Flip a coin", true)
        .addField("!join", "Join lobby for current game", true)
        .addField("!showall", "Show all players in a lobby", true)
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
        if(!lobby.playerExists()){
            lobby.addPlayer(msg.author.id, new Player(msg.author, msg.author.id));
            msg.channel.send(`${msg.author} has joined the lobby`)
        }
    }

});

client.login(token);