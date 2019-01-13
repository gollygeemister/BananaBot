function Player(author, name, id) {
    this.author = author;
    this.name = name;
    this.id = id;
    this.tokens = 100;
}

Player.prototype.setTokens = function(value) {
    this.tokens = value;
};

Player.prototype.getTokens = function() {
    return this.tokens
};

Player.prototype.addTokens = function(value){
    this.tokens += value;
};

Player.prototype.getName = function() {
    return this.name;
};

Player.prototype.getAuthor = function() {
    return this.author;
}

Player.prototype.getId = function() {
    return this.id;
};  

module.exports = Player;