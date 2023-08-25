import GAME_SETTINGS from "../constants/GameSettings";
import CollisionBlock from "./CollisionBlock";

class ScoreBlock extends CollisionBlock {
    constructor({ position, height, width, c }) {
        super({ position, height, width, c });
    }
    draw() {
        this.c.fillStyle = 'rgb(0, 255, 0)';
        this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    generateNewPosition(colHandler) {
        this.position = {
            x: Math.floor(Math.random() * (GAME_SETTINGS.WIDTH - this.width)),
            y: 150 + (Math.floor(Math.random() * (GAME_SETTINGS.HEIGHT - this.height))),
        }
        for(let i = 0; i < colHandler.platforms.length; i++) {
            if(colHandler.collision({
                object1: this,
                object2: colHandler.platforms[i],
            }) || (Math.abs(this.position.x - colHandler.player.position.x) < 40) ||
            (Math.abs(this.position.y - colHandler.player.position.y) < 40) ||
            (this.position.y + this.height > GAME_SETTINGS.HEIGHT)) {
                this.generateNewPosition(colHandler);
            }
        }
    }
}
export default ScoreBlock;