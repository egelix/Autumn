import CollisionBlock from "./CollisionBlock";

class CoinSpawnBlock extends CollisionBlock {
    constructor({ position, height, width, c }) {
        super({ position, height, width, c });
    }
    draw() {
        this.c.fillStyle = 'rgb(0, 255, 255)';
        this.c.drawImage(this.currentImage, this.position.x, this.position.y, this.width, this.height);
      }
    activate(game) {
        game.spawnAllCoins();
        game.currentLevel.currentCoins = game.currentLevel.maxCoins;
        game.playerGUI.timeLimit -= 5;
    }
    initializeImage() {
        const img = new Image()
        img.src = "/src/game/assets/sprites/items/coinspawnblock/coin_spawn1.png";
        this.currentImage = img;
    }
}
export default CoinSpawnBlock;