import CollisionBlock from "./CollisionBlock";

class CoinSpawnBlock extends CollisionBlock {
    constructor({ position, height, width, c }) {
        super({ position, height, width, c });
    }
    draw() {
        this.c.fillStyle = 'rgb(0, 255, 255)';
        this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
      }
    activate(game) {
        game.spawnAllCoins();
        game.currentLevel.currentCoins = game.currentLevel.maxCoins;
        game.playerGUI.timeLimit -= 5;
    }
}
export default CoinSpawnBlock;