const { ActionRowBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, StringSelectMenuBuilder, EmbedBuilder, PermissionFlagsBits, Embed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("selectmenu-test")
    .setDescription("test")
    .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
    execute(interaction) {
        const embed = new EmbedBuilder()
        .setTitle("Your SelectMenuBuilder")
        .setDescription("here is ur select meny builder if it is worked then u will recieve a message and if their is a bug then make sure to report it in our dicord server astro networks")
        .setColor("NotQuiteBlack")
        .setTimestamp()

        const row = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
            .setPlaceholder("select from here")
            .setCustomId("select menu")
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions(
                {
                    label: "Here",
                    description: "| Click on it"
                },
            ),
        )
        interaction.reply({ content: "here is it", embeds: [embed],  components: [row]})
    }
}