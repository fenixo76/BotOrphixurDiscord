import { SlashCommandBuilder } from "@discordjs/builders"
import { CommandInteraction, Message, MessageActionRow, MessageEmbed, MessageSelectMenu } from "discord.js"

export default {
    data: new SlashCommandBuilder()
        .setName("farm")
        .setDescription("Envoi un demande qui veut FARM avec moi"),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction: CommandInteraction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId("select")
                    .setPlaceholder("Sélectionnez le temps de farm")
                    .addOptions([
                        {
                            label: "Pendant",
                            description: "30m",
                            value: "Pendant 30m",
                            
                        },
                      
                        {
                            label: "Pendant",
                            description: "1h00",
                            value: "Pendant 1h00",
                        },
                        {
                            label: "Pendant",
                            description: "1h30",
                            value: "Pendant 1h30",
                            
                        },
                      
                        {
                            label: "Pendant",
                            description: "2h00",
                            value: "Pendant 2h00",
                        },
                    ])
            )
        
        const embed = new MessageEmbed()
            .setColor("#00FFF3")
            .setAuthor({ name: "Sondage", iconURL: "https://titles.trackercdn.com/destiny/common/destiny2_content/icons/DestinyActivityModeDefinition_0aa1d7b0e0ac2c6820036b6b3dde3e5b.png" })
            .setDescription("<@&804813354493280276> \nVeuillez répondre à ce sondage par le biais de ces réactions :\n--------------------------------------------------------------------")
            .setThumbnail("https://titles.trackercdn.com/destiny/common/destiny2_content/icons/DestinyActivityModeDefinition_0aa1d7b0e0ac2c6820036b6b3dde3e5b.png")
            .setTitle("Qui veut Farm avec moi ?")
            .addFields(
                { name: "Gambit :", value: "Votez avec : 🤬", inline: true },
                { name: "Pvp :", value: "Votez avec : 🤯", inline: true },
                { name: "Raid :", value: "Votez avec : 🤪", inline: true },
                { name: "Donjon :", value: "Votez avec : 😱", inline: true },
                { name: "Armes :", value: "Votez avec : 🤤", inline: true },
                { name: "Contrat :", value: "Votez avec : 😚", inline: true },
                { name: "Assaut :", value: "Votez avec : 🤭", inline: true },
                { name: "Nuit Noire :", value: "Votez avec : 😈", inline: true },
            )

        const message = await interaction.reply({embeds: [embed], components: [row], fetchReply: true }) as Message
        message.react("🤬")
        message.react("🤯")
        message.react("🤪")
        message.react("😱")
        message.react("🤤")
        message.react("😚")
        message.react("🤭")
        message.react("😈")
        
        
    }

}
