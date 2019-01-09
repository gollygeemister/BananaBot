class Player {
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.tokens = 100;
    }

    get Tokens() {
        return this.tokens;
    }

    set Tokens(value) {
        this.tokens = value;
    }

    addTokens(value) {
        this.tokens += value;
    }

    get Name() {
        return this.name;
    }

    get Id() {
        return this.id;
    }   
}

module.exports = Player;