const Commands = require('./commands')

module.exports = class Nombre extends Commands {

    static match(message) {
        return message.content.startsWith('?miston')
    }

    static action(message, Discord){
        message.channel.send('Miston le BG.')
    }

}