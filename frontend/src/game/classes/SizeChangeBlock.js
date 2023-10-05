import GAME_SETTINGS from "../constants/GameSettings";
import CollisionBlock from "./CollisionBlock";

class SizeChangeBlock extends CollisionBlock {
    constructor({ position, height, width, c }) {
        super({ position, height, width, c });
    }
    draw() {
        this.c.drawImage(this.currentImage, this.position.x, this.position.y, this.width, this.height);
      }
    activate(game) {
        const growth = GAME_SETTINGS.BLOCK_SIZE / 2;
        game.scoreBlocks.forEach(block => {
            block.height += growth;
            block.width += growth;
            block.score++;
            block.hitBox.x += growth / 2;
            block.hitBox.y += growth / 2;
            block.position.x -= growth / 2;
            block.position.y -= growth / 2;
            block.hitBox.position.x -= growth / 2;
            block.hitBox.position.y -= growth / 2;
        });
        game.spawnPowerUp();
    }
    initializeImage() {
        const img = new Image()
        img.src = "/src/game/assets/sprites/items/sizechangeblock/size_change1.png";
        this.currentImage = img;
    }
}
export default SizeChangeBlock;