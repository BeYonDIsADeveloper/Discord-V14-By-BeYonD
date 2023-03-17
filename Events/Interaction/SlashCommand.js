const { ChatInputCommandInteraction, Events } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client) {
        if(!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if(!command) return interaction.reply({content: "This Command Is Outdated", ephemeral : true});

        if(command.developer && interaction.user.id !== "Your Discord Id Here")
        return interaction.reply({content: "This Command is only available to developer.", ephemeral: true});
        

        const subCommand = interaction.options.getSubcommand(false);
        if(subCommand) {
            const subCommandFile = client.subCommands.get(`${interaction.commandName}.${subCommand}`)
            if(!subCommandFile) return({ content: "This subCommand Is Outdated", ephemeral: true});
            subCommandFile.execute(interaction, client);
        } else  command.execute(interaction, client);
    }
}
