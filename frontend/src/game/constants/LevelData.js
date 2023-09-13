import GAME_SETTINGS from "./GameSettings";

const LEVELS = [
    {
        name: "level1",
        maxCoins: 4,
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
                width: 100,
            },
            {
                position: {
                    x: 450,
                    y: GAME_SETTINGS.HEIGHT - 200,
                },
                height: 20,
                width: 100,
            },
            {
                position: {
                    x: 800,
                    y: GAME_SETTINGS.HEIGHT - 200,
                },
                height: 20,
                width: 100,
            }

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
                x: 550,
                y: GAME_SETTINGS.HEIGHT - 300,
            },

            {
                x: 750,
                y: GAME_SETTINGS.HEIGHT - 300,
            },
        ]
    }
]
export default LEVELS;