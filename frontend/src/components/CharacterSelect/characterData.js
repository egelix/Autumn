const characterData = [
    {
        key: 1,
        name: "Martin",
        headShotSrc: "/src/gifs/martin_headshot.gif",
        spriteSrc: "/src/game/assets/sprites/characters/martin/martin.png",
        animations: {
            idle: {
                src: "/src/game/assets/sprites/characters/martin/martin_idle.png",
                frameBuffer: 10,
                frameRate: 4,
            },
            idleLeft: {
                src: "/src/game/assets/sprites/characters/martin/martin_idle_left.png",
                frameBuffer: 10,
                frameRate: 4,
            },
            run: {
                src: "/src/game/assets/sprites/characters/martin/martin_run_right.png",
                frameBuffer: 10,
                frameRate: 6,
            },
            runLeft: {
                src: "/src/game/assets/sprites/characters/martin/martin_run_left.png",
                frameBuffer: 10,
                frameRate: 6,
            },
        },
        hitBox: {
            width: 1,
            height: 1,
        },
        width: 2,
        height: 2,
    },
    {
        key: 2,
        name:"Kris",
        headShotSrc: "/src/gifs/kris_headshot.gif",
        spriteSrc: "/src/game/assets/sprites/characters/kris/kris_jobs.png",
        animations: {
            idle: {
                src: "/src/game/assets/sprites/characters/kris/kris_idle.png",
                frameBuffer: 10,
                frameRate: 4,
            },
            idleLeft: {
                src: "/src/game/assets/sprites/characters/kris/kris_idle.png",
                frameBuffer: 10,
                frameRate: 4,
            },
            run: {
                src: "/src/game/assets/sprites/characters/kris/kris_run_right.png",
                frameBuffer: 10,
                frameRate: 6,
            },
            runLeft: {
                src: "/src/game/assets/sprites/characters/kris/kris_run_left.png",
                frameBuffer: 10,
                frameRate: 6,
            },
        },
        hitBox: {
            width: 1,
            height: 3,
        },
        width: 0.5,
        height: 1.5,
    }
]
export default characterData;