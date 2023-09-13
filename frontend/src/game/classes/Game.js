import GAME_SETTINGS from "../constants/GameSettings";
import Player from "./Player";
import CollisionBlock from "./CollisionBlock";
import InputHandler from "./InputHandler";
import ScoreBlock from "./ScoreBlock";
import PlayerGUI from "./PlayerGUI";
import LEVELS from "../constants/LevelData";

class Game {
    constructor(canvas, playerCharacter) {
        this.canvas = canvas;
        this.c = canvas.getContext('2d');
        this.playerCharacter = playerCharacter;
        this.platforms = [];
        this.scoreBlock = new ScoreBlock({
            position: {
                x: 500,
                y: GAME_SETTINGS.HEIGHT - 60,
            },
            height: 20,
            width: 20,
            c: this.c,
        });
        this.state = "starting";
        this.currentLevel = LEVELS[0];
    }
    initialize() {
        this.c.canvas.width = GAME_SETTINGS.WIDTH;
        this.c.canvas.height = GAME_SETTINGS.HEIGHT;
        this.loadPlatforms();
        this.player = new Player({
            position: {x: 10, y: 10}, 
            context: this.c,
            platforms: this.platforms,
            scoreBlock: this.scoreBlock,
            playerCharacter: this.playerCharacter,
        });
        this.playerGUI = new PlayerGUI ({
            player: this.player,
            context: this.c,
            game: this,
        })
        this.inputHandler = new InputHandler(this.player);
        window.addEventListener('keydown', (event) => {
            this.inputHandler.handleKeyDown(event);
        })
        window.addEventListener('keyup', (event) => {
            this.inputHandler.handleKeyUp(event);
        })
        }
    draw() {
        this.c.fillStyle = 'white';
        this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    update() {
        if(this.state === "starting") {
            this.playerGUI.displayStartTimer();
            return;
        }
        if(this.state === "finished") {
            this.playerGUI.displayGameOver();
            return;
        }
        this.draw();
        this.platforms.forEach((platform) => {
            platform.update();
        })
        this.scoreBlock.update();
        this.player.update();
        this.playerGUI.update();
    }
    loadPlatforms() {
        this.platforms = this.currentLevel.platforms.map((platform) => {
            return new CollisionBlock({...platform, c: this.c});
        })
    }
}
export default Game;