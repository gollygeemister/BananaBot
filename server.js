const Discord = require('discord.js');
const token = 'NTMyMzYzMTAwMDk2MTY3OTM3.DxbZcQ.-5nE-1-GoNn8vOldTKZgVR_dVQ0';

const client = new Discord.Client();


client.on('ready', (msg)=> {
    client.channels.find(x => x.name === 'test').send('Hello, I\'m connected!');
});

client.login(token);