import CoinSpawnBlock from "../classes/CoinSpawnBlock";
import LevelChangeBlock from "../classes/LevelChangeBlock";

const GAME_SETTINGS = {
    WIDTH: 1024,
    HEIGHT: 576,
    GRAVITY: 2,
    BLOCK_SIZE: 1024/32,
    MAX_FALL_SPEED: 15,
    POWERUP_TYPES: [
        LevelChangeBlock.prototype,
        CoinSpawnBlock.prototype,
    ],
    STARTING_POSITION: {
        x: 32,
        y: 200,
    }
}
export default GAME_SETTINGS;