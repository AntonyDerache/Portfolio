import type { ProjectData } from '../types/projectData.types';

const projectsData: Array<ProjectData> = [
  {
    name: 'forestBoy',
    year: '2022',
    itchio: 'https://antotogames.itch.io/forest-boy',
    pictures: [
      {
        img: '/images/forest-boy/forest-boy-1.jpg',
        alt: 'forest-boy-1',
      },
      {
        img: '/images/forest-boy/forest-boy-2.jpg',
        alt: 'forest-boy-2',
      },
      {
        img: '/images/forest-boy/forest-boy-3.jpg',
        alt: 'forest-boy-3',
      },
      {
        img: '/images/forest-boy/forest-boy-4.jpg',
        alt: 'forest-boy-4',
      },
      {
        img: '/images/forest-boy/forest-boy-5.jpg',
        alt: 'forest-boy-5',
      },
    ],
    installerLinks: [
      {
        title: 'MacOs',
        link: 'https://www.dropbox.com/scl/fi/abhv5lw63oqtach80ykyy/ForestBoy.dmg?rlkey=32ydpz5d59uu2kiijgtmwfuss&st=bconf35i&dl=1',
      },
      {
        title: 'Window x86',
        link: 'https://www.dropbox.com/scl/fi/o39x8e7qzdy9se3f31obx/ForestBoySetup.exe?rlkey=ww715sjr8u4ssaldgeabyq9eo&st=o65t9hpq&dl=1',
      },
    ],
  },
  {
    name: 'skullKingScore',
    year: '2024',
    pictures: [
      {
        img: '/images/skull-king-score/skull-king-score-1.png',
        alt: 'forest-boy-1',
      },
    ],
    installerLinks: [
      {
        title: 'Android .apk',
        link: 'https://www.dropbox.com/scl/fi/ckhasd1wdy2zk6ayb0olb/skull_king_score_v1.0.1.apk?rlkey=87a68311f212hy2msuat5gt5g&st=n1y2h623&dl=1',
      },
    ],
  },
  {
    name: 'pong',
    year: '2021',
    pictures: [
      {
        img: '/images/pong/pong.png',
        alt: 'pong-1',
      },
      {
        img: '/images/pong/pong-1.png',
        alt: 'pong-2',
      },
      {
        img: '/images/pong/pong-2.png',
        alt: 'pong-3',
      },
    ],
    github: 'https://github.com/AntonyDerache/3D-pong',
    itchio: 'https://antotogames.itch.io/3d-pong',
    filename: 'Build',
  },
  {
    name: 'gameOfLife',
    year: '2021',
    pictures: [
      {
        img: '/images/game-of-life/gameoflife-1.JPG',
        alt: 'game-of-life-1',
      },
      {
        img: '/images/game-of-life/gameoflife-2.JPG',
        alt: 'game-of-life-2',
      },
      {
        img: '/images/game-of-life/gameoflife-3.JPG',
        alt: 'game-of-life-3',
      },
      {
        img: '/images/game-of-life/gameoflife-4.JPG',
        alt: 'game-of-life-4',
      },
    ],
    github: 'https://github.com/AntonyDerache/game-of-life',
    hasWebGL: true,
    webGLPath: '/WebGL/GameOfLife/Build/',
    filename: 'WebGL',
  },
  {
    name: 'astroBrawl',
    year: '2019 [Reworking in progress]',
    pictures: [
      {
        img: '/images/astro-brawl/astro-brawl-1.png',
        alt: 'astrobrawl-1',
      },
      {
        img: '/images/astro-brawl/astro-brawl-2.png',
        alt: 'astrobraw-2',
      },
      {
        img: '/images/astro-brawl/astro-brawl-3.png',
        alt: 'astrobrawl-3',
      },
    ],
  },
  {
    name: 'apiSave',
    year: '2021',
    pictures: [
      {
        img: '/images/sobook/API-1.png',
        alt: 'api-1',
      },
    ],
  },
  {
    name: 'epicture',
    year: '2020',
    pictures: [
      {
        img: '/images/epicture/epicture-background.png',
        alt: 'epicture',
      },
    ],
  },
  {
    name: 'rewinder',
    year: '2020',
    pictures: [
      {
        img: '/images/rewinder/rewinder-1.png',
        alt: 'rewinderGame-4',
      },
      {
        img: '/images/rewinder/rewinder-2.png',
        alt: 'rewinderGame-2',
      },
      {
        img: '/images/rewinder/rewinder-3.png',
        alt: 'rewinderGame-3',
      },
      {
        img: '/images/rewinder/rewinder-4.png',
        alt: 'rewinderGame-1',
      },
    ],
  },
];

export default projectsData;
