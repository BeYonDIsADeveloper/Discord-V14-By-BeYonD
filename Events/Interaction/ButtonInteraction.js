const { ChatInputCommandInteraction, Events, EmbedBuilder } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client) {
        const embed = new EmbedBuilder()
        if(!interaction.isButton) return
            if(customId === "button") {
                interaction.channel.sendTyping({ embeds: [embed.setDescription("Now you can go in the file of Events > Interactions and their u will see a buttoninteraction.js file in that file u can add and remove the buttons from their you can just edit it as u like")]})
            }
    }
}
