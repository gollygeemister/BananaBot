const Player = require("./Player.js");

function Lobby(){
    this.players = new Map();
}

Lobby.prototype.addPlayer = function(id, player){
    this.players.set(id, player);
};

Lobby.prototype.removePlayer = function(id){
    this.players.delete(id);
};

Lobby.prototype.playerExists = function(id){
    return this.players.has(id);
};

Lobby.prototype.getPlayer = function(id){
    return this.players.get(id);
};

Lobby.prototype.getAllPlayers = function(){
    return this.players.entries();
};

Lobby.prototype.emptyLobby = function(){
    this.players.clear();
};

module.exports = Lobby;