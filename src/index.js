const { Client, Intents } = require("discord.js")
require('dotenv').config()
const welcome = require('./services/welcome')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
client.login(process.env.TOKEN)
client.once('ready', () => console.log("Discord bot online"));

client.on('message', function (message) {
    client.channels.fetch(process.env.CHAT_WELCOME) // Mensagem de boas vindas!
        .then(channel => {
            if (message.author.bot) return;
            if (message.channelId === process.env.CHAT_WELCOME) { 
                channel.send({ embeds: [welcome.welcome(message.author)] })
                message.delete()
            }
        })
})