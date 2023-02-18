const { ChatInputCommandInteraction, Events, EmbedBuilder } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client) {
        const embed = new EmbedBuilder()
        if(!interaction.isStringSelectMenu) {
                interaction.channel.sendTyping({ embeds: [embed.setDescription("Now you can go in the file of Events > Interactions and their u will see a SelectMenuinteraction.js file in that file u can add and remove the selectmenu from their you can just edit it as u like")]})
            }
    }
}
