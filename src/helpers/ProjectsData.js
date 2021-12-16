import image from '../assets/images/preview-brawhalla.png'

export const bannerProjectsData = [
    {
        classBg: "gol",
        title: "gameOfLife",
        url: "game-of-life"
    },
    {
        classBg: "brawhalla",
        title: "brawhalla",
        url: "brawhalla"

    },
    {
        classBg: "epi-jam",
        title: "epitechJam",
        url: "epitech-jam"
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
];

export const projectsData = {
    gameOfLife: {
        name: "gameOfLife",
        year: "2021",
        genre: "genre",
        what: "what",
        description: "description",
        pictures: [
            {
                img: image,
                alt: "misc"
            }
        ],
        github: "https://github.com/AntonyDerache/game-of-life"
    },
    brawhalla: {
        name: "brawhalla",
        year: "2019",
        genre: "genre",
        what: "what",
        description: "description",
        pictures: [
            {
                img: image,
                alt: "misc"
            },
            {
                img: image,
                alt: "misc"
            }
        ],
    },
    epitechJam: {
        name: "epitechJam",
        year: "2019",
        genre: "genre",
        what: "what",
        description: "description",
        pictures: [
            {
                img: image,
                alt: "misc"
            }
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
                img: image,
                alt: "misc"
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
                img: image,
                alt: "misc"
            }
        ],
    },
}