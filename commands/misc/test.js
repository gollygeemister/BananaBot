const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    // Add Commands Here
    return message.channel.send(`Hello, ${message.author}!`);
}

module.exports.help = {
    name: "test"
}