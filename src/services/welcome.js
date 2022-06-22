const { MessageEmbed } = require("discord.js");

const welcome = (author) => {
    const user = author;
    let msg = `Salve <@${user.id}>! Você acabou de entrar no servidor RJH Entertainment.
Aqui você poderá interagir, jogar, ter aulas, conversar sobre programação, tecnologia e muito mais!`
    let avatar_URL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=`
    return new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${user.username}丨Bem vindo(a) nobre ave!`)
        .setDescription(msg)
        .addFields(
            { name: 'Primeiros passos', value: 'Siga os passos descritos em 🧬丨cargos e receba seu acesso personalizado.' },
            { name: 'Importante!', value: 'Conheça nossas regras para não ter problemas 📜丨Regras.', inline: true },
            { name: 'Quem somos?', value: 'Um pouco mais sobre nós em 📰丨informações.', inline: true },
            { name: 'Fique atento!', value: '📢丨Avisos', inline: true },
        )
        .setThumbnail(avatar_URL+'64')
        .setTimestamp()
        .setFooter({ text: 'Aproveite!' });
}
module.exports.welcome = welcome