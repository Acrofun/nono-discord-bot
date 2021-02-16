const Commands = require('./commands')

module.exports = class Nombre extends Commands {

    static match(message) {
        return message.content.startsWith('?nono')
    }

    static action(message, Discord){
        message.channel.send('Noé, connu sous le pseudo \'Nono_0fficiel\' est l\'associé du streameur HayzWave. Attention, c\'est un vrai crack en informatique !')
    }

}