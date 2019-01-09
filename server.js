const Discord = require('discord.js');
const token = 'NTMyMzYzMTAwMDk2MTY3OTM3.DxbZcQ.-5nE-1-GoNn8vOldTKZgVR_dVQ0';

const client = new Discord.Client();


client.on('ready', ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
    client.channels.find(x => x.name === 'test').send('Hello, I\'m connected!');
});

client.on('message', (msg) => {

    if (msg.content === "!test"){
        msg.channel.send(`Hello, ${msg.author}!`)
    }

});

client.login(token);