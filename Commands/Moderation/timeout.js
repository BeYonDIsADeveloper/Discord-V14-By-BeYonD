const { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");
const Database = require("../../Schemas/Infractions");
const ms = require("ms");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Timeout a member")
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .setDMPermission(false)
    .addUserOption(options => options
        .setName("target")
        .setDescription("User whom to timeout")
        .setRequired(true)    
    )
    .addStringOption(options => options
        .setName("duration")
        .setDescription("Time How much to timeout.")    
        .setRequired(true)
    )
    .addStringOption(options => options 
        .setName("reason")
        .setDescription("Reason why to timeout")
        .setMaxLength(512)    
    ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction) {
        const { options, guild, member} = interaction;
        
        const target = options.getMember("target");
        const duration = options.getString("duration");
        const reason = options.getString("reason") || "None Specified."

        const errorsArray = [];

        const errorsEmbed = new EmbedBuilder()
        .setAuthor({ name: "Could not timeout member because"})
        .setColor("Red");

        if(!target) return interaction.reply({
            embeds: [errorsEmbed.setDescription("Member has most likey left the server")],
            ephemeral: true
        });

        if(!ms(duration) || ms(duration) < ms("28d"))
        errorsArray.push("Time provided is invalid or over the time limit.");

        if(!target.manageable || !target.moderatable)
        errorsArray.push("Selected target is higher then me!");

        if(!member.roles.highest.position > target.roles.highest.position)
        errorsArray.push("He is higher then you");

        if(errorsArray.length)
        return interaction.reply({
            embeds: [errorsEmbed.setDescription(errorsArray.join("\n"))],
            ephemeral: true
        });

target.timeout(ms(duration), reason).catch((err) => {
    interaction.reply({embeds: [errorsEmbed.setDescription("Could not timeot uncommon error")]
     })
     return console.log("Error occured in timeout.js", err)
        });


        const newInfractionObject = {
            IssuerID: member.id,
            IssuerTag: member.user.tag,
            Reason: reason,
            Date: Date.now()
        }

        let userData = await Database.findOne({Guild: guild.id, User: target.id});
        if(!userData) 
        userData = await Database.create({Guild: guild.id, User: target.id, Infractions: [newInfractionObject]});
        else
        userData.Infractions.push(newInfractionObject) && await userData.save();

        const successEmbed = new EmbedBuilder()
        .setAuthor({name: "Timeout Given", iconURL: guild.iconURL()})
        .setColor("Gold")
        .setDescription ([
            `${target} was given timeout for ${ms(ms(duration), {long: true})}** By ${member}`,
            `Bringing their infractions total to **${userData.Infractions.length} points**`,
            `\n Reason: ${reason}`
        ].join("\n"))

        return interaction.reply({embeds: [successEmbed]});
    }
}
//const {DANCING THIS IS HAT TO DO } = requiire("discord.js")