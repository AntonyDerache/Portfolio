export type ProjectPictures = {
  img: string,
  alt: string;
};

export type ProjectData = {
  name: string,
  year: string,
  genre: string,
  what: string,
  description: string,
  itchio?: string,
  pictures: Array<ProjectPictures>
  installer?: {
    mac: string,
    win: string,
  },
  github?: string,
  hasWebGL?: boolean,
  webGLPath?: string,
  filename?: string,
};