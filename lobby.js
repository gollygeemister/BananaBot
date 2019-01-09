const Player = require("./Player.js");

class lobby {

    constructor(){
        this.players = new Map();
    }

    addPlayer(id, player){
        this.players.set(is, player);
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