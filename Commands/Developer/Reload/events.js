const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
} = require("discord.js");
const {
  loadEvents,
} = require("../../../Handlers/eventHandler");
module.exports = {
  subCommand: "reload.events",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    const embed = new EmbedBuilder();
    for (const [key, value] of client.events) client.removeAllListeners();
    loadEvents(client);
    interaction.reply({
      embeds: [
        embed
          .setDescription("Reloaded All The Events")
          .setTitle("Events Status")
          .setColor("Green"),
      ],
      ephemeral: true,
    });
  },
};
