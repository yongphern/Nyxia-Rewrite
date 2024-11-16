import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import Logger from '../utils/Logger.js';

export default {
    dev: true,
    owner: false,
    category: "Miscellaneous",
    
    data: new SlashCommandBuilder()
        .setName('list-devs')
        .setDescription('🔨 List the development team of Nyxia'),
        
    async init(interaction, client) {
        try {
            const data = await model.find({ FLAGS: 'DEVELOPER' }).exec();
            if (data && data.length > 0) {
                const userList = [];
                // Fetch user information for each user ID in data
                for (const dev of data) {
                    if (dev.User === "981755777754755122") continue;
                    const user = await client.users.fetch(dev.User);
                    if (user) {
                        // Check if the user is in the interaction's guild
                        const guild = interaction.guild;
                        const member = await guild.members.fetch(user.id).catch(() => null);
                        
                        const statusEmoji = member ? '`✅`' : '`❌`';
                        
                        userList.push(`${statusEmoji} **|** <@${dev.User}> \`${user.username}\``);
                    }
                }
                const me = await interaction.guild.members.fetch("981755777754755122").catch(() => null);
                const statusEmoji = me ? '`✅`' : '`❌`';
                const userListString = userList.join('\n');                    
                const embed = new EmbedBuilder()
                    .setTitle("Nyxia Development Team")
                    .setColor("#f6bbcd")
                    .setDescription(`These are the people who maintain the development of Nyxia!\n> <:enable_1:1206754451818553364><:enable_2:1206754477152145438> - In Server\n> <:disable_1:1206754389805637682><:disable_2:1206754421590065152> - Not in server`)
                    .setFooter(client.footer())
                    .addFields(
                        {
                            name: "__Lead Developer__",
                            value: `> ${statusEmoji} **|** <@981755777754755122> \`dreamwxve\``,
                            inline: false
                        },
                        {
                            name: "__Collaborators__",
                            value: `>>> ${userListString}`,
                            inline: false
                        }
                    );

                return interaction.reply({embeds: [embed]});
            }
        } catch (err) {
            Logger.error("Cmd - ListDevs", "Something went wrong with fetching the developer list. Might be a simple glitch or connection issue. If it persists, contact a developer.", err);
            return interaction.reply(
                {
                    embeds: [
                        new EmbedBuilder()
                           .setTitle("An error occurred")
                           .setColor("#ff0000")
                           .setDescription("An error occurred while fetching the developer list.")
                           .setFooter({text: "footer text"})
                    ]
                }
            );
        }
    }
};
