module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (interaction.isCommand()){
			const command = client.commands.get(interaction.commandName);

			if (!command) return;

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(error);
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
		if (interaction.isButton()){
			if(interaction.customId.slice(0,1) === 'd'){
				// console.log(interaction);
				let roll = getRandomInt(interaction.customId.slice(1));
				interaction.reply(`<@${interaction.member.id}> rolled a ${interaction.customId} and got ${roll}`);
			}
		}
	},
};

function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}