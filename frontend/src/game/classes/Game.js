import GAME_SETTINGS from "../constants/GameSettings";
import Player from "./Player";
import CollisionBlock from "./CollisionBlock";
import InputHandler from "./InputHandler";
import ScoreBlock from "./ScoreBlock";
import PlayerGUI from "./PlayerGUI";
import LEVELS from "../constants/LevelData";
import LevelChangeBlock from "./LevelChangeBlock";

class Game {
    constructor(canvas, playerCharacter) {
        this.canvas = canvas;
        this.c = canvas.getContext('2d');
        this.playerCharacter = playerCharacter;
        this.platforms = [];
        this.scoreBlocks = [];
        this.state = "starting";
        this.currentLevel = LEVELS[0];
        this.lastScoreBlock = {
            position: {
                x: 0,
                y: 0,
            }
        }
        this.powerUp = {
            position: {
                x: 0,
                y: 0,
            }
        };
    }
    initialize() {
        this.c.canvas.width = GAME_SETTINGS.WIDTH;
        this.c.canvas.height = GAME_SETTINGS.HEIGHT;
        this.loadPlatforms();
        this.spawnPowerUp();
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
        this.powerUp.update();
        this.player.update();
        this.playerGUI.update();
        this.checkScoreBlocks();
    }
    loadPlatforms() {
        this.platforms = this.currentLevel.platforms.map((platform) => {
            return new CollisionBlock({...platform, c: this.c});
        })
    }
    loadScoreBlocks() {
        const randomPositions = [...this.currentLevel.coinPositions]
            .filter((position) => this.lastScoreBlock.position.x !== position.x && this.lastScoreBlock.position.y !== position.y)
            .sort(() => 0.5 - Math.random())
            .slice(0, this.currentLevel.maxCoins);
        this.scoreBlocks = randomPositions.map((position) => {
            return new ScoreBlock({
                position: {
                    x: position.x,
                    y: position.y,
                },
                width: 20,
                height: 20,
                c: this.c,
            })
        })
    }
    checkScoreBlocks() {
        if(this.scoreBlocks.length === 1) {
            this.lastScoreBlock = this.scoreBlocks[0];
        }
        if(this.scoreBlocks.length === 0) {
            this.loadScoreBlocks();
        }
    }
    pickRandomLevel() {
        const randomLevels = [...LEVELS]
        .filter((level) => level.name !== this.currentLevel.name)
        .sort(() => 0.5 - Math.random());
        this.currentLevel = randomLevels[0];
        this.scoreBlocks = [];
        this.platforms = [];
        this.loadPlatforms();
        this.loadScoreBlocks();
        this.spawnPowerUp();
    }
    spawnPowerUp() {
        const randomIndex = Math.floor(Math.random() * this.currentLevel.powerUpPositions.length);
        const newPosition = this.currentLevel.powerUpPositions[randomIndex];
        if(this.powerUp.position.x === newPosition.x && this.powerUp.position.y === newPosition.y) {
            this.spawnPowerUp();
        }
        this.powerUp = new LevelChangeBlock({
            position: {
                x: newPosition.x,
                y: newPosition.y,
            },
            height: 20,
            width: 20,
            c: this.c,
        })
    }
}
export default Game;