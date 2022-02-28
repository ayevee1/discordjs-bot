const { Client, Intents} = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()
const {createCmd} = require('./CmdMaker')


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('WALL-E is ready')

    const guildID = '943648550942814248'
    const guild = client.guilds.cache.get(guildID)
    
    createCmd(guild)
    
})

client.on('messageCreate', message => {
    if(message.author.id === '942090822176890910'){
        if(message.toString() === 'test'){
            message.reply('working')
        }

    }
    
})

client.on('interactionCreate', i => {
    if(!i.isCommand() && i.user.bot){return}

    if(i.commandName === 'clear'){
        return
    }
    
})


client.login(process.env.TOKEN)