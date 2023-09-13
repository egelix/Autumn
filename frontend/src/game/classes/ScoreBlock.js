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
    update() {
        this.draw();
    }
}
export default ScoreBlock;