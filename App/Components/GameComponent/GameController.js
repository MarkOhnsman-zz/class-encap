import { GameService } from "./GameService.js";

//PRIVATE
let gameService = new GameService();

function draw(health){
    document.getElementById('health').innerText = health;
}

//PUBLIC
export class GameController {
    constructor() {

    }

    attack(type) {
        draw(gameService.attack(type))

    }
}