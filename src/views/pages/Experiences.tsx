import React, { useEffect } from 'react';
import { VerticalTimeline, } from 'react-vertical-timeline-component';
import type { TFunction } from 'i18next';

import ExperienceElement from '@/components/ExperienceElement';
import PresentationScreen from '@/layouts/presentationScreen/PresentationScreen';
import 'react-vertical-timeline-component/style.min.css';

export interface ExperiencesProps {
  updateIndex: Function,
  t: TFunction,
}

const Experiences = ({ updateIndex, t }: ExperiencesProps) => {
  useEffect(() => {
    updateIndex(3);
  }, [updateIndex])

  return (
    <div id="experiences" className="pages w-100 h-100">
      <PresentationScreen title={t('experiences.title')} />
      <div className="content fl blue">
        <VerticalTimeline>
          <ExperienceElement
            backColor={"#fff"}
            skillsName={["ReactJS", "NodeJS", "ExpressJS", "TypeScript", "Ionic",]}
            title={t('experiences.trackapBis.job')}
            substitle={t('experiences.trackapBis.date')}
            description={t('experiences.trackapBis.description')}
          />
          <ExperienceElement
            backColor={"#fff"}
            skillsName={["NodeJS", "ExpressJS", "VueJS", "MongoDB", "Travis"]}
            title={t('experiences.sobook.job')}
            substitle={t('experiences.sobook.date')}
            description={t('experiences.sobook.description')}
          />
          <ExperienceElement
            backColor={"#fff"}
            skillsName={["ReactJS", "NodeJS", "ExpressJS", "TypeScript", "Ionic", "AWS S3"]}
            substitle={t('experiences.trackap.date')}
            title={t('experiences.trackap.job')}
            description={t('experiences.trackap.description')}
          />
          <ExperienceElement
            backColor={"#fff"}
            skillsName={["ReactJS", "NodeJS", "ExpressJS"]}
            title={t('experiences.skipty.job')}
            substitle={t('experiences.skipty.date')}
            description={t('experiences.skipty.description')}
          />
          <ExperienceElement
            backColor={"#fff"}
            title={t('experiences.delpharm.job')}
            substitle={t('experiences.delpharm.date')}
            description={t('experiences.delpharm.description')}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experiences;
