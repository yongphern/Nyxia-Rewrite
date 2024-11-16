import { SlashCommandBuilder } from 'discord.js';

export default {
	// developer only? (only registers in support server)
	dev: true || false,

	// server owner only?
	owner: true || false,

	// Category name
	category: "",

//----------------------------------------------------------------
	data: new SlashCommandBuilder()

		.setName('') // name of the command
		.setDescription('') // description of the command


		// ------------
		// SUB COMMANDS
		// ------------
		.addSubcommand(x =>
			x
				.setName('')
				.setDescription('')

				/* options */
		)

		// -----------------
		// SUB COMMAND GROUP
		// -----------------
		.addSubcommandGroup(x =>
			x
				.setName('')
				.setDescription('')

				// Subcommand is required
				.addSubcommand(x =>
					x
						.setName('')
						.setDescription('')
		
						/* options */
				)
		)

		// ---------------
		// GENERIC OPTIONS
		// ---------------

		.addStringOption(option => 
			option
				.setName('example_string')
				.setDescription('An example string option')
				.setRequired(true)
				.addChoices(
					{ name: "Choice1", value: "choice1" },
					{ name: "Choice2", value: "choice2" }
				)
		)
		.addBooleanOption(option => 
			option
				.setName('example_boolean')
				.setDescription('An example boolean option')
				.setRequired(false)
		)
		.addIntegerOption(option => 
			option
				.setName('example_integer')
				.setDescription('An example integer option')
				.setRequired(false)
				.addChoices(
					{ name: "One", value: 1 },
					{ name: "Two", value: 2 }
				)
		)
		.addUserOption(option => 
			option
				.setName('example_user')
				.setDescription('An example user option')
				.setRequired(false)
		)
		.addChannelOption(option => 
			option
				.setName('example_channel')
				.setDescription('An example channel option')
				.setRequired(false)
		)
		.addRoleOption(option => 
			option
				.setName('example_role')
				.setDescription('An example role option')
				.setRequired(false)
		)
		.addNumberOption(option => 
			option
				.setName('example_number')
				.setDescription('An example number option')
				.setRequired(false)
		)
		.addAttachmentOption(option => 
			option
				.setName('example_attachment')
				.setDescription('An example attachment option')
				.setRequired(false)
		)
		.addMentionableOption(option =>
			option
				.setName('example_mentionable')
				.setDescription('An example mentionable option')
				.setRequired(false)
		)



,
	async init(interaction, client) {
		// run your stuff
	
	},
};