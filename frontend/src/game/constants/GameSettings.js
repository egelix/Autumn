import CoinSpawnBlock from "../classes/CoinSpawnBlock";
import LevelChangeBlock from "../classes/LevelChangeBlock";

const GAME_SETTINGS = {
    WIDTH: 1024,
    HEIGHT: 576,
    GRAVITY: 1,
    BLOCK_SIZE: 20,
    POWERUP_TYPES: [
        LevelChangeBlock.prototype,
        CoinSpawnBlock.prototype,
    ],
}
export default GAME_SETTINGS;