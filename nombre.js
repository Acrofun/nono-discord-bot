const Commands = require('./commands')

module.exports = class Nombre extends Commands {

    static match(message) {
        return message.content.startsWith('!jeu')
    }

    static action(message, Discord){
        let args = message.content.split(' ')
        args.shift()
        let nombre = Math.floor(Math.random() * (args - 1) + 1)
        let find = -1
        message.reply('Vous avez 15 secondes pour trouver un nombre entre 1 et ' + args)
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 15000, errors: ['time'] });
        collector.on('collect', message => {
            find = message.content
            if (message.content == nombre) {
                message.reply('Bravo ! Le nombre était ' + message.content)
                return
            } else if (message.content > nombre) {
                message.reply('Et non ! C\'est MOINS ! Propose un nouveau nombre !')
            } else if (message.content < nombre) {
                message.reply('Et non ! C\'est PLUS ! Propose un nouveau nombre !')
            }
        })
        collector.on('end', (collected) => {
            if(find == nombre){
                message.reply('Fin du temps ! Vous avez GAGNÉ !')
            } else {
                message.reply('Fin du temps ! Vous avez PERDU !')
            }

        })
    }

}