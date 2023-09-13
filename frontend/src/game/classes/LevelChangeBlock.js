import CollisionBlock from "./CollisionBlock";

class LevelChangeBlock extends CollisionBlock {
    constructor({ position, height, width, c }) {
        super({ position, height, width, c });
    }
    draw() {
        this.c.fillStyle = 'rgb(255, 0, 255)';
        this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
      }
    activate(game) {
        game.pickRandomLevel();
    }
}
export default LevelChangeBlock;