import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { TFunction } from 'i18next';

import PresentationScreen from '@/layouts/presentationScreen/PresentationScreen';
import ProjectBanner from '@/components/project-banner/ProjectBanner';
import bannerProjectsData from '@/helpers/bannersData';
import './work.scss';

export interface ProjectProps {
  updateIndex: (index: number) => void;
  t: TFunction;
}

function Projects({ updateIndex, t }: ProjectProps) {
  useEffect(() => {
    updateIndex(4);
  }, [updateIndex]);

  return (
    <div id="work" className="pages w-100 h-100">
      <PresentationScreen title={t('projects.title')} />
      <div className="content w-100 h-100 red d-flex flex-column">
        {
          bannerProjectsData && bannerProjectsData.map((item) => (
            <Link to={`/projects/${item.url}`} key={item.title}>
              <ProjectBanner classBg={item.classBg} title={t(`projects.${item.title}.name` as const)} />
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Projects;
