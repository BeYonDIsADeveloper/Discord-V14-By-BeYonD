const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const { Client } = require("undici");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Bot Ping")
    .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
    execute(interaction) {
        const ms = require("ms")
        const embed = new EmbedBuilder()
        .setTitle("**__Bot Pings__**")
        .setDescription(`Bot Ping :- ${ms(Client.ws.ping)}`)
        .setTimestamp()
        .setColor("Aqua")

        interaction.channel.send({ content: "Bot Ping", embeds: [embed]})

    }
}