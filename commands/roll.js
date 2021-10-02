const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Makes buttons to roll dice'),
	async execute(interaction) {
		const row1 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('d4')
					.setLabel('d4')
					.setStyle('PRIMARY'),
			)
			.addComponents(
				new MessageButton()
					.setCustomId('d6')
					.setLabel('d6')
					.setStyle('PRIMARY'),
			)
			.addComponents(
				new MessageButton()
					.setCustomId('d8')
					.setLabel('d8')
					.setStyle('PRIMARY'),
			);
		const row2 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('d10')
					.setLabel('d10')
					.setStyle('PRIMARY'),
			)
			.addComponents(
				new MessageButton()
					.setCustomId('d12')
					.setLabel('d12')
					.setStyle('PRIMARY'),
			)
			.addComponents(
				new MessageButton()
					.setCustomId('d20')
					.setLabel('d20')
					.setStyle('PRIMARY'),
			);
				
		await interaction.reply({ content: 'Roll!', components: [row1, row2] }); 
	},
};