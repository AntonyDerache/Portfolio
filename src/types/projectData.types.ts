export type ProjectPictures = {
  img: string,
  alt: string;
};

export type InstallerType = {
  title: string;
  link: string;
}

export type ProjectData = {
  name: 'forestBoy' | 'pong' | 'gameOfLife' | 'astroBrawl' | 'apiSave' | 'epicture' | 'rewinder' | 'skullKingScore',
  year: string,
  itchio?: string,
  pictures: Array<ProjectPictures>,
  installerLinks?: Array<InstallerType>,
  github?: string,
  hasWebGL?: boolean,
  webGLPath?: string,
  filename?: string,
};
