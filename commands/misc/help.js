const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    // Add Commands Here
    //return message.channel.send("OSRS...");
    const embed = new Discord.RichEmbed()
            .setTitle("COMMANDS")
            .setDescription("All commands available")
            .addField("!roll", "Roll a number 0-100", true)
            .addField("!flip", "Flip a coin", true)
            .addField("!join", "Join lobby for current game", true)
            .addField("!showtokens", "Displays your tokens", true)
            .addField("!showall", "Show all players in a lobby", true)
        return message.channel.send(embed);
}

module.exports.help = {
    name: "help"
}