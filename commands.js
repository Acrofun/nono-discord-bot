module.exports = class command {

    static parse(message, Discord){
        if(this.match(message)) {
            this.action(message, Discord)
            return true
        }
        return false
    }

    static match (message) {
        return false
    }

    static action (message, Discord) {
    }

}