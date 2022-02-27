const createCmd = (gld) => {
    let commands

    if(gld) {
        commands = gld.commands
    } else {
        commands = client.application.commands
    }

    commands?.create({
        name: 'clear',
        description: 'clears messages'
    })
}

module.exports = {createCmd}