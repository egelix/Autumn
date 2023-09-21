import GAME_SETTINGS from "./GameSettings";
const UNIT = GAME_SETTINGS.BLOCK_SIZE;

const LEVELS = [
    {
        name: "level1",
        maxCoins: 4,
        platforms: [
            {
                position: {
                    x: 0,
                    y: GAME_SETTINGS.HEIGHT - UNIT,
            },
                height: UNIT,
                width: GAME_SETTINGS.WIDTH,
            },
            {
                position: {
                    x: UNIT * 3,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 5),
            },
                height: UNIT/2,
                width: UNIT * 6,
            },
            {
                position: {
                    x: UNIT * 13,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
                },
                height: UNIT/2,
                width: UNIT * 6,
            },
            {
                position: {
                    x: UNIT * 23,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 5),
                },
                height: UNIT/2,
                width: UNIT * 6,
            }

        ],
    coinPositions: [
            {
                x: UNIT * 3,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
            {
                x: UNIT * 5.5,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
            {
                x: UNIT * 8,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
            {
                x: UNIT * 23,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
            {
                x: UNIT * 25.5,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
            {
                x: UNIT * 28,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
            {
                x: UNIT * 15.5,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 10),
            },
            {
                x: UNIT * 15.5,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 12),
            },
            {
                x: UNIT * 15.5,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 14),
            },
            {
                x: UNIT * 13,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 7),
            },
            {
                x: UNIT * 18,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 7),
            },
            {
                x: UNIT * 15.5,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 4),
            },
            {
                x: UNIT * 13,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 4),
            },
            {
                x: UNIT * 18,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 4),
            },
            {
                x: UNIT * 21,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 5),
            },
            {
                x: UNIT * 10,
                y: GAME_SETTINGS.HEIGHT - (UNIT * 5),
            },
        ],
    powerUpPositions: [
        {
            x: UNIT * 15.5,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 7),
        },
        {
            x: UNIT * 12,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 14),
        },
        {
            x: UNIT * 19,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 14),
        },
        {
            x: UNIT * 30,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 9),
        },
        {
            x: UNIT * 5.5,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 4.5),
        },
        {
            x: UNIT * 25.5,
            y: GAME_SETTINGS.HEIGHT - (UNIT * 4.5),
        },
    ]
    },
    /* {
        name: "level2",
        maxCoins: 3,
        platforms: [
            {
                position: {
                    x: 0,
                    y: GAME_SETTINGS.HEIGHT - 20,
            },
                height: 20,
                width: GAME_SETTINGS.WIDTH,
            },
            {
                position: {
                    x: 20,
                    y: GAME_SETTINGS.HEIGHT - 200,
            },
                height: 20,
                width: 300,
            },
            

        ],
    coinPositions: [
            {
                x: 10,
                y: GAME_SETTINGS.HEIGHT - 100,
            },
            {
                x: 230,
                y: GAME_SETTINGS.HEIGHT - 100,
            },
            {
                x: 450,
                y: GAME_SETTINGS.HEIGHT - 100,
            },
            {
                x: 570,
                y: GAME_SETTINGS.HEIGHT - 100,
            },
            {
                x: 690,
                y: GAME_SETTINGS.HEIGHT - 100,
            },
            {
                x: 50,
                y: GAME_SETTINGS.HEIGHT - 300,
            },
            {
                x: 250,
                y: GAME_SETTINGS.HEIGHT - 300,
            },
            {
                x: 350,
                y: GAME_SETTINGS.HEIGHT - 300,
            },
        ],
    powerUpPositions: [
        {
            x: 10,
            y: GAME_SETTINGS.HEIGHT - 200,
        },
        {
            x: 450,
            y: GAME_SETTINGS.HEIGHT - 200,
        },
        {
            x: 570,
            y: GAME_SETTINGS.HEIGHT - 200,
        },
    ]
    },
    {
        name: "level3",
        maxCoins: 1,
        platforms: [
            {
                position: {
                    x: 0,
                    y: GAME_SETTINGS.HEIGHT - UNIT,
            },
                height: UNIT,
                width: GAME_SETTINGS.WIDTH,
            },
            {
                position: {
                    x: UNIT * 4,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 16),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
            {
                position: {
                    x: UNIT * 7,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 8),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
            {
                position: {
                    x: UNIT * 10,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 12),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
            {
                position: {
                    x: UNIT * 13,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 4),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
            {
                position: {
                    x: UNIT * 16,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 6),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
            {
                position: {
                    x: UNIT * 16,
                    y: GAME_SETTINGS.HEIGHT - (UNIT * 11),
            },
                height: UNIT/2,
                width: UNIT * 3,
            },
        ],
    coinPositions: [
            {
                x: 10,
                y: GAME_SETTINGS.HEIGHT - UNIT * 16,
            },
        ],
    powerUpPositions: [
        {
            x: -100,
            y: GAME_SETTINGS.HEIGHT - 200,
        },
    ]
    }, */
]
export default LEVELS;