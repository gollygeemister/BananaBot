const Player = require("./Player.js");

class Lobby {

    constructor(){
        this.players = new Map();
    }

    addPlayer(id, player){
        this.players.set(id, player);
    }

    removePlayer(id){
        this.players.delete(id);
    }

    playerExists(id){
        return this.players.has(id);
    }

    getPlayer(id){
        return this.players.get(id);
    }

    getAllPlayers(){
        return this.players.entries();
    }

    emptyLobby(){
        this.players.clear();
    }

}

module.exports = Lobby;