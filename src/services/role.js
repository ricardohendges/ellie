const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, client) {
        const channel = process.env.CHAT_ROLE;
        const estudosRole = message.guild.roles.cache.find(role => role.name === "Estudos");
        const aulaHorusRole = message.guild.roles.cache.find(role => role.name === "Aluno Horus");
 
        const estudos = '📚';
        const aulaHorus = '🥳';
 
        let embed = new MessageEmbed()
            .setColor('#e42643')
            .setTitle('Defina seu cargo de acordo com seu perfil!')
            .setDescription('Escolha seu cargo conforme sua procura por conhecimento em nosso servidor. \n\n'
                + `${estudos} para Estudos \n`
                + `${aulaHorus} para Aula Horus`);
 
        let messageEmbed = await message.channel.send({ embeds: [embed] })
        messageEmbed.react(estudos);
        messageEmbed.react(aulaHorus);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === estudos) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(estudosRole);
                }
                if (reaction.emoji.name === aulaHorus) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(aulaHorusRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === estudos) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(estudosRole);
                }
                if (reaction.emoji.name === aulaHorus) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(aulaHorusRole);
                }
            } else {
                return;
            }
        });
    } 
}   