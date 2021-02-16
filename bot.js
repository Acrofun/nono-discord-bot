const Discord = require('discord.js')
const bot = new Discord.Client()
const Nombre = require('./nombre')
const Nono = require('./nono')
const Miston = require('./miston')

bot.on('message', function (message) {
    return Nombre.parse(message, Discord) || Nono.parse(message, Discord) || Miston.parse(message, Discord)
})

bot.login(process.env.TOKEN)

