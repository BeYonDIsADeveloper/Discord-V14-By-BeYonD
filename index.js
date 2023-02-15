const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
  ActivityType,
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Messages, GuildMember, ThreatMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Messages, GuildMember, ThreatMember],
});

client.config = require("./config.json");
client.commands = new Collection();
client.subCommands = new Collection();
client.events = new Collection();

const { connect } = require("mongoose");
connect(client.config.DatabaseURL, {}).then(() =>
  console.log("The clinet is now connected to the database")
);
const { loadEvents } = require("./Handlers/eventHandler");
loadEvents(client);

client.login(client.config.token);
