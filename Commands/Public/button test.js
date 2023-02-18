const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, PermissionFlagsBits, ActionRowBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("test-button")
    .setDescription("your first test button")
    .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
    execute(interaction) {
        const embed = new EmbedBuilder() // u don't need an embed it's just i like to make it
        .setTitle("Your Button")
        .setDescription("It is working")
        .setTimestamp()

    const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId("button") // u can put any custom id here
            .setLabel("Button")
            .setStyle(ButtonStyle.Primary) // u can add ur style it's only four danger, primary, secondary & success
        )
        interaction.reply({ content: "Your Embed And Button", embeds: [embed], components: [button]})
    }      
}