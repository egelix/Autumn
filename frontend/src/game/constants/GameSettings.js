import CoinSpawnBlock from "../classes/CoinSpawnBlock";
import LevelChangeBlock from "../classes/LevelChangeBlock";
import SizeChangeBlock from "../classes/SizeChangeBlock";

const GAME_SETTINGS = {
    WIDTH: 1024,
    HEIGHT: 576,
    GRAVITY: 2,
    get BLOCK_SIZE() {return this.WIDTH/32},
    MAX_FALL_SPEED: 15,
    POWERUP_TYPES: [
        LevelChangeBlock.prototype,
        CoinSpawnBlock.prototype,
        SizeChangeBlock.prototype,
    ],
    STARTING_POSITION: {
        x: 32,
        y: 200,
    }
}
export default GAME_SETTINGS;