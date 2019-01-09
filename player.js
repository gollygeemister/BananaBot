class Player {
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.tokens = 100;
    }

    getTokens() {
        return this.tokens;
    }

    setToken(value) {
        this.tokens = value;
    }

    addTokens(value) {
        this.tokens += value;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    
}