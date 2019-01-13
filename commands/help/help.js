const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    // Add Commands Here
    return message.channel.send("OSRS...");
}

module.exports.help = {
    name: "help"
}