export type ProjectPictures = {
  img: string,
  alt: string;
};

export type ProjectData = {
  name: 'forestBoy' | 'pong' | 'gameOfLife' | 'astroBrawl' | 'apiSave' | 'epicture' | 'rewinder',
  year: string,
  itchio?: string,
  pictures: Array<ProjectPictures>
  installerLinks?: {
    mac: string,
    win: string,
  },
  github?: string,
  hasWebGL?: boolean,
  webGLPath?: string,
  filename?: string,
};
