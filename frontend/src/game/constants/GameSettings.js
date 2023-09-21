import CoinSpawnBlock from "../classes/CoinSpawnBlock";
import LevelChangeBlock from "../classes/LevelChangeBlock";

const GAME_SETTINGS = {
    WIDTH: 1024,
    HEIGHT: 576,
    GRAVITY: 2,
    BLOCK_SIZE: 1024/32,
    MAX_FALL_SPEED: 40,
    POWERUP_TYPES: [
        LevelChangeBlock.prototype,
        CoinSpawnBlock.prototype,
    ],
}
export default GAME_SETTINGS;