const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    return message.channel.send(`${message.author} rolled: ` + Math.floor(Math.random() * 101));
}

module.exports.help = {
    name: "roll"
}