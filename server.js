const Discord = require('discord.js');
const Player = require("./Player.js");
const Lobby = require('./lobby.js');
const token = 'NTMyMzYzMTAwMDk2MTY3OTM3.DxbZcQ.-5nE-1-GoNn8vOldTKZgVR_dVQ0';

const client = new Discord.Client();

var lobby = new Lobby();

const fs = require("fs");

// load commands
function getFiles(dir, files_) {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files) {
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}


client.commands = new Discord.Collection();
let fileList = getFiles("./commands");
    let jsfiles = fileList.filter(f => f.split(".").pop() === "js");
    jsfiles.forEach((f, i) => {
        let props = require(`${f}`);
        client.commands.set(props.help.name, props);
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {

    let prefix = "!";
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    let cmd = client.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(client, message, args);

    /*
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