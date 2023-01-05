export const bannerProjectsData = [
     {
        classBg: "forest-boy",
        title: "forestBoy",
        url: "forest-boy"
    },
    {
        classBg: "pong",
        title: "pong",
        url: "3d-pong"
    },
    {
        classBg: "gol",
        title: "gameOfLife",
        url: "game-of-life"
    },
    {
        classBg: "astro-brawl",
        title: "astroBrawl",
        url: "astro-brawl"

    },
    {
        classBg: "api-save",
        title: "apiSave",
        url: "api-save"
    },
    {
        classBg: "epicture",
        title: "epicture",
        url: "epicture"
    },
    {
        classBg: "rewinder",
        title: "rewinder",
        url: "rewinder"
    },
];

export const projectsData = {
    // -- Template --
    // name: {
    //     name: "json item of lang objet",
    //     year: "2022",
    //     genre: "genre // DO NOT CHANGE",
    //     what: "what // DO NOT CHANGE",
    //     description: "description // DO NOT CHANGE",
    //     pictures: [
    //         {
    //             img: "/images/{name}",
    //             alt: "alt"
    //         },
    //         ...
    //     ],
    //     github: "github link (not mandatory)",
    //     itchio: "itch.io link (not mandatory)",
    //     installer: {
    //         mac: "installer.dmg",
    //         win: "installer.exe",
    //     },
    //     hasWebGL: boolean,
    //     webGLPath: "/WebGL/Name/Build/"
    //     filename: "WebGL" if files of build have different name than the game
    // },
    forestBoy: {
        name: "forestBoy",
        year: "2022",
        genre: "genre",
        what: "what",
        description: "description",
        itchio: "https://antotogames.itch.io/forest-boy",
        pictures: [
            {
                img: "/images/forest-boy-1.jpg",
                alt: "forest-boy-1"
            },
            {
                img: "/images/forest-boy-2.jpg",
                alt: "forest-boy-2"
            },
            {
                img: "/images/forest-boy-3.jpg",
                alt: "forest-boy-3"
            },
            {
                img: "/images/forest-boy-4.jpg",
                alt: "forest-boy-4"
            },
            {
                img: "/images/forest-boy-5.jpg",
                alt: "forest-boy-4"
            },
        ],
        installer: {
            mac: "ForestBoy.dmg",
            win: "ForestBoySetup.exe",
        },
    },
    pong: {
        name: "pong",
        year: "2021",
        genre: "genre",
        what: "what",
        description: "description",
        pictures: [
            {
                img: "/images/pong.png",
                alt: "pong-1"
            },
            {
                img: "/images/pong-1.png",
                alt: "pong-2"
            },
            {
                img: "/images/pong-2.png",
                alt: "pong-3"
            },
        ],
        github: "https://github.com/AntonyDerache/3D-pong",
        itchio: "https://antotogames.itch.io/3d-pong",
        hasWebGL: true,
        webGLPath: "/WebGL/3Dpong/Build/",
        filename: "Build",
    },
    gameOfLife: {
        name: "gameOfLife",
        year: "2021",
        genre: "genre",
        what: "what",
        description: "description",
        pictures: [
            {
                img: "/images/gameoflife-1.JPG",
                alt: "game-of-life-1"
            },
            {
                img: "/images/gameoflife-2.JPG",
                alt: "game-of-life-2"
            },
            {
                img: "/images/gameoflife-3.JPG",
                alt: "game-of-life-3"
            },
            {
                img: "/images/gameoflife-4.JPG",
                alt: "game-of-life-4"
            },
        ],
        github: "https://github.com/AntonyDerache/game-of-life",
        hasWebGL: true,
        webGLPath: "/WebGL/GameOfLife/Build/",
        filename: "WebGL"
    },
    astroBrawl: {
        name: "astroBrawl",
        year: "2019 [Reworking in progress]",
        genre: "genre",
        what: "what",
        description: "description",
        pictures: [
            {
                img: "/images/astro-brawl-1.png",
                alt: "astrobrawl-1"
            },
            {
                img: "/images/astro-brawl-2.png",
                alt: "astrobraw-2"
            },
            {
                img: "/images/astro-brawl-3.png",
                alt: "astrobrawl-3"
            },
        ],
    },
    apiSave: {
        name: "apiSave",
        year: "2021",
        genre: "genre",
        what: "what",
        description: "description",
        pictures: [
            {
                img: "/images/API-1.png",
                alt: "api-1"
            }
        ],
    },
    epicture: {
        name: "epicture",
        year: "2020",
        genre: "genre",
        what: "what",
        description: "description",
        pictures: [
            {
                img: "/images/epicture-background.png",
                alt: "epicture"
            }
        ],
    },
    rewinder: {
        name: "rewinder",
        year: "2020",
        genre: "genre",
        what: "what",
        description: "description",
        pictures: [
            {
                img: "/images/rewinder-1.png",
                alt: "rewinderGame-4"
            },
            {
                img: "/images/rewinder-2.png",
                alt: "rewinderGame-2"
            },
            {
                img: "/images/rewinder-3.png",
                alt: "rewinderGame-3"
            },
            {
                img: "/images/rewinder-4.png",
                alt: "rewinderGame-1"
            },
        ],
    },
}