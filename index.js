const { Client, Intents} = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()
const {createCmds} = require('./CmdMaker')
const fs = require('fs')
const datas = require('./data.json')
const mong = require('mongoose')

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})


client.on('ready', async () => {
    await mong.connect(process.env.MONGO_URI, {
        keepAlive: true
    })
    console.log('WALL-E is ready')
    const guildID = '943648550942814248'
    const guild = client.guilds.cache.get(guildID)
    
    createCmds(guild)
    
})

client.on('messageCreate', message => {
    if(message.author.id === '942090822176890910'){
        console.log(message.author.createdAt)
        if(message.toString() === 'rmk'){
            message.guild.channels.create(message.channel.name, {
                type: 'text'
            }).then((channel) => {
                channel.setParent('943648550942814249')
            })
            message.channel.delete()
        }
    }
})

client.on('interactionCreate', i => {
    if(!i.isCommand() && i.user.bot){return}

    if(i.commandName === 'clear'){
        i.reply('deleted')
        i.channel.bulkDelete(i.options._hoistedOptions[0].value)
        setTimeout(()=>{return null}, 5000)
        i.channel.bulkDelete((1))
    }
})


client.login(process.env.TOKEN)