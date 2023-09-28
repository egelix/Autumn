import CollisionBlock from "./CollisionBlock";

class SizeChangeBlock extends CollisionBlock {
    constructor({ position, height, width, c }) {
        super({ position, height, width, c });
    }
    draw() {
        this.c.drawImage(this.currentImage, this.position.x, this.position.y, this.width, this.height);
      }
    activate(game) {
        game.scoreBlocks.forEach(block => {
            block.height += 15;
            block.width += 15;
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