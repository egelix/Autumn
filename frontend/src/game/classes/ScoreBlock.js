import CollisionBlock from "./CollisionBlock";

class ScoreBlock extends CollisionBlock {
    constructor({ position, height, width, c }) {
        super({ position, height, width, c });
    }
    draw() {
        this.c.drawImage(this.currentImage, this.position.x, this.position.y, this.width, this.height);
    }
    update() {
        this.draw();
    }
    initializeImage() {
        const img = new Image()
        img.src = "/src/game/assets/sprites/items/coin/coin.png";
        this.currentImage = img;
    }
}
export default ScoreBlock;