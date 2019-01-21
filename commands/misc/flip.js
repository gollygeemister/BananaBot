const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    var randomNum = Math.random();
    if(randomNum > .5)
        return message.channel.send("Heads!");
    return message.channel.send("Tails!");
}

module.exports.help = {
    name: "flip"
}