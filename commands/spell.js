const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');
const api = 'https://www.dnd5eapi.co/api/spells/';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spells')
		.setDescription('Replies with spell description')
		.addStringOption(option =>
			option.setName('spell')
                .setDescription('The spell to search')
                .setRequired(true)),
	
	async execute(interaction) {
		const spell = interaction.options.getString('spell').replace(/ /g, "-");
		axios.get(api + spell.toLowerCase() + '/').then(resp =>{
			interaction.reply(resp.data.desc[0]);
			// console.log(resp.data.desc);
		}).catch(error => {
			interaction.reply('No conozco ese hechizo');
			console.log(spell);
		});
	},
};