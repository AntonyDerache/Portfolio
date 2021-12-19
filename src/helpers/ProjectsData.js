import GameOfLife1 from '../assets/images/gameoflife-1.JPG'
import GameOfLife2 from '../assets/images/gameoflife-2.JPG'
import GameOfLife3 from '../assets/images/gameoflife-3.JPG'
import GameOfLife4 from '../assets/images/gameoflife-4.JPG'
import AstroBrawl1 from '../assets/images/astro-brawl-1.png'
import AstroBrawl2 from '../assets/images/astro-brawl-2.png'
import AstroBrawl3 from '../assets/images/astro-brawl-3.png'
import EpitechJam1 from '../assets/images/epitech-jam-1.JPG'
import EpitechJam2 from '../assets/images/epitech-jam-2.JPG'
import EpitechJam3 from '../assets/images/epitech-jam-3.JPG'
import EpitechJam4 from '../assets/images/epitech-jam-4.JPG'
import Epicture from '../assets/images/epicture-background.png'
import Api1 from '../assets/images/API-1.png'

export const bannerProjectsData = [
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
                img: GameOfLife1,
                alt: "game-of-life-1"
            },
            {
                img: GameOfLife2,
                alt: "game-of-life-2"
            },
            {
                img: GameOfLife3,
                alt: "game-of-life-3"
            },
            {
                img: GameOfLife4,
                alt: "game-of-life-4"
            },
        ],
        github: "https://github.com/AntonyDerache/game-of-life"
    },
    astroBrawl: {
        name: "astroBrawl",
        year: "2019",
        genre: "genre",
        what: "what",
        description: "description",
        pictures: [
            {
                img: AstroBrawl1,
                alt: "astrobrawl-1"
            },
            {
                img: AstroBrawl2,
                alt: "astrobraw-2"
            },
            {
                img: AstroBrawl3,
                alt: "astrobrawl-3"
            },
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
                img: EpitechJam4,
                alt: "epitechJam-4"
            },
            {
                img: EpitechJam2,
                alt: "epitechJam-2"
            },
            {
                img: EpitechJam3,
                alt: "epitechJam-3"
            },
            {
                img: EpitechJam1,
                alt: "epitechJam-1"
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
                img: Api1,
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
                img: Epicture,
                alt: "epicture"
            }
        ],
    },
}