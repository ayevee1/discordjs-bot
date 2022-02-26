const { Client, Intents, Interaction} = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('WALL-E is ready')

    let commands = client.application.commands
    
    commands.create({
        name: 'ping',
        description: 'replies with pong!'
    })

})


client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand) {return}
    let name = interaction.commandName

    if(name=='ping'){
        interaction.reply({
            content: 'pong',
            ephemeral: false
        })

    }

})




client.login(process.env.TOKEN)