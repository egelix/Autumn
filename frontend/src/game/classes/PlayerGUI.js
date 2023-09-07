import GAME_SETTINGS from "../constants/GameSettings";

class PlayerGUI {
    constructor({player, context, game}) {
        this.player = player;
        this.c = context;
        this.game = game;
        this.startingTime = Date.now();
        this.timeElapsed = 0;
        this.timeLimit = 20;
        this.displayedTime = this.timeLimit;
    };
    draw() {
        this.c.font = "30px Arial";
        this.c.fillText("SCORE: " + this.player.score, 800, 30);
        this.c.fillText("TIME: " + this.displayedTime, 40, 30);
        this.c.fillText("NAME: " + this.player.name, 40, 500);
    };
    update() {
        this.draw();
        this.timeElapsed = this.startingTime - Date.now();
        this.displayedTime = Math.floor(this.timeLimit + (this.timeElapsed / 1000));
        if(this.displayedTime === 0) {
            this.game.state = "finished";
        }
    }
    displayGameOver() {
        this.c.clearRect(0, 0, GAME_SETTINGS.WIDTH, GAME_SETTINGS.HEIGHT);
        this.c.font = "100px Arial";
        this.c.fillText("GAME OVER", 30, 300);
        this.c.fillText("YOUR SCORE: " + this.player.score, 20, 500);
    }
}
export default PlayerGUI;