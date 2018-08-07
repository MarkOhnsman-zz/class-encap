import { GameController } from "./App/Components/GameComponent/GameController.js";

export class App {
    constructor() {
        this.controllers = {
            gameController: new GameController()
        }
    }
}

window.app = new App();

