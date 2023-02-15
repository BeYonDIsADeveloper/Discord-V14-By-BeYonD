const { ActivityType } = require("discord.js");
const colors = require("colors")
const { loadCommands } = require("../../Handlers/commandHanlder")

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log("The client is now ready.".random);
        client.user.setActivity({
            name: "Best Bots By Astro Network",
            Type: ActivityType.Playing
        })
        loadCommands(client);
    }
}