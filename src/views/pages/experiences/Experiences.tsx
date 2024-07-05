import React, { useEffect } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import type { TFunction } from 'i18next';

import ExperienceElement from '@/components/experience-element/ExperienceElement';
import PresentationScreen from '@/layouts/presentationScreen/PresentationScreen';
import 'react-vertical-timeline-component/style.min.css';
import './experiences.scss';

export interface ExperiencesProps {
  updateIndex: (index: number) => void,
  t: TFunction,
}

function Experiences({ updateIndex, t }: ExperiencesProps) {
  useEffect(() => {
    updateIndex(3);
  }, [updateIndex]);

  return (
    <div id="experiences" className="pages w-100 h-100">
      <PresentationScreen title={t('experiences.title')} />
      <div className="content fl blue">
        <VerticalTimeline>
          <ExperienceElement
            backColor="#fff"
            skillsName={['VueJS', 'Typescript', 'Java', 'Java Spring', 'Craftsmanship', 'Playwright']}
            title={t('experiences.ipponBis.job')}
            substitle={t('experiences.ipponBis.date')}
            description={t('experiences.ipponBis.description')}
          />
          <ExperienceElement
            backColor="#fff"
            skillsName={['SvelteJS', 'Java', 'Java Spring', 'Lit Element', 'TypeScript', 'DDD', 'Playwright', 'Cypress', 'Storybook']}
            title={t('experiences.ippon.job')}
            substitle={t('experiences.ippon.date')}
            description={t('experiences.ippon.description')}
          />
          <ExperienceElement
            backColor="#fff"
            skillsName={['ReactJS', 'NodeJS', 'ExpressJS', 'TypeScript', 'Ionic']}
            title={t('experiences.trackapBis.job')}
            substitle={t('experiences.trackapBis.date')}
            description={t('experiences.trackapBis.description')}
          />
          <ExperienceElement
            backColor="#fff"
            skillsName={['NodeJS', 'ExpressJS', 'VueJS', 'MongoDB', 'Travis']}
            title={t('experiences.sobook.job')}
            substitle={t('experiences.sobook.date')}
            description={t('experiences.sobook.description')}
          />
          <ExperienceElement
            backColor="#fff"
            skillsName={['ReactJS', 'NodeJS', 'ExpressJS', 'TypeScript', 'Ionic', 'AWS S3']}
            substitle={t('experiences.trackap.date')}
            title={t('experiences.trackap.job')}
            description={t('experiences.trackap.description')}
          />
          <ExperienceElement
            backColor="#fff"
            skillsName={['ReactJS', 'NodeJS', 'ExpressJS']}
            title={t('experiences.skipty.job')}
            substitle={t('experiences.skipty.date')}
            description={t('experiences.skipty.description')}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experiences;
