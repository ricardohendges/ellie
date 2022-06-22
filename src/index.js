const { Client, Intents, Collection } = require("discord.js")
const welcome = require('./services/welcome')
const role = require(`./services/role`)
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
client.commands = new Collection()
client.commands.set(role.name, role)

client.login(process.env.TOKEN)
client.once('ready', () => console.log("Discord bot online 💚"));

client.on('message', function (message) {
    client.channels.fetch(process.env.CHAT_WELCOME) // Mensagem de boas vindas!
        .then(channel => {
            if (message.author.bot) return;
            if (message.channelId === process.env.CHAT_WELCOME) { 
                channel.send({ embeds: [welcome.welcome(message.author)] })
                message.delete()
            }
        })
    client.channels.fetch(process.env.CHAT_ROLE) // Mensagem de boas vindas!
        .then(channel => {
            if (message.author.bot) return;
            if (message.channelId === process.env.CHAT_ROLE) {
                client.commands.get('reactionrole').execute(message, client);
            }
        })
})