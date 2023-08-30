import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import WebGL from '@/components/WebGL';
import { ProjectData } from '@/types/projectData.types';

const Games = ({ data }: { data: Array<ProjectData> }) => {
  const { name } = useParams();
  const [gameData, setGameData] = useState<ProjectData>()

  useEffect(() => {
    const dataFound = data.find(data => data.name === name);
    setGameData(dataFound);
  }, [data, name])

  return (
    <WebGL path={gameData!.webGLPath} filename={gameData!.filename} />
  )
}

export default Games;