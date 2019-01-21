const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    // Add Commands Here
    return message.channel.send(`Your ID is ${message.author.id}`);
}

module.exports.help = {
    name: "showid"
}