const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
} = require("discord.js");
const {
  loadCommands,
} = require("../../../Discord-V14-By-BeYonD/Handlers/commandHanlder");
module.exports = {
  subCommand: "reload.commands",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    const embed = new EmbedBuilder();
    loadCommands(client);
    interaction.reply({
      embeds: [
        embed
          .setDescription("Reloaded Commands")
          .setTitle("Commands Status")
          .setColor("Green"),
      ],
      ephemeral: true,
    });
  },
};
