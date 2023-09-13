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
        this.scoreBlocks = [];
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
            game: this,
            playerCharacter: this.playerCharacter,
        });
        this.loadScoreBlocks();
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
        this.scoreBlocks.forEach((scoreBlock) => {
            scoreBlock.update();
        });
        this.player.update();
        this.playerGUI.update();
        if(this.scoreBlocks.length === 0) {
            this.loadScoreBlocks();
        }
    }
    loadPlatforms() {
        this.platforms = this.currentLevel.platforms.map((platform) => {
            return new CollisionBlock({...platform, c: this.c});
        })
    }
    loadScoreBlocks() {
        while(this.scoreBlocks.length < this.currentLevel.maxCoins) {
            const randomIndex = Math.floor(Math.random() * this.currentLevel.coinPositions.length);
            const randomBlock = this.currentLevel.coinPositions[randomIndex];
            const newBlock = new ScoreBlock({
                position: {
                    x: randomBlock.x,
                    y: randomBlock.y,
                },
                height: 20,
                width: 20,
                c: this.c,
            })
            if(this.checkPosition({targetBlock: newBlock, scoreBlocks: this.scoreBlocks})) {
                continue;
            }
            else {
                this.scoreBlocks.push(newBlock);
            }
        }
    }
    checkPosition({targetBlock, scoreBlocks}) {
        scoreBlocks.forEach((block) => {
            if(this.player.collisionHandler.collision({object1: targetBlock, object2: block})) {
                return true;
            }
        })
        return false;
    }
}
export default Game;