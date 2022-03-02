const createCmds = (gld) => {
    let commands

    if(gld) {
        commands = gld.commands
    } else {
        commands = client.application.commands
    }

    commands.create({
        name: 'clear',
        description: 'clears messages',
        options: [{
            name: 'num',
            description: 'number',
            required: true,
            type: 'INTEGER'
        }]
    })
}

module.exports = {createCmds}