const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    return message.channel.send("OSRS...");
}

module.exports.help = {
    name: "osrs"
}