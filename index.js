const { Client, Intents, Interaction} = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()
const {createCmd} = require('./SlashCmdHandler')


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

client.on('messageCreate', message => {
    if(message.author.id === '942090822176890910'){
        if(message.toString() === 'test'){
            message.reply('working')
            console.log(message.channel.name)
        }
        if(message.toString() === 'del10'){
            message.channel.bulkDelete(10, true)
            console.log('10 messages deleted')
        }
    }
    
})






client.login(process.env.TOKEN)