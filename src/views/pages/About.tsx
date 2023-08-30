import React, { useEffect } from 'react';
import PresentationScreen from '../../layouts/presentationScreen/PresentationScreen';
import type { TFunction } from 'i18next';

export interface AboutProps {
  updateIndex: Function;
  t: TFunction
}

const About = ({ updateIndex, t }: AboutProps) => {
  useEffect(() => {
    updateIndex(5);
  }, [updateIndex])

  return (
    <div id="about" className="pages w-100 h-100">
      <PresentationScreen title={t('about.title')} />
      <div className="content purple fl">
        <div className="container">
          <p className="pb-5">{t('about.description')}</p>
          <div className="d-flex flex-column justify-content-center align-items-center flex-md-row py-4">
            <a href="https://github.com/AntonyDerache" rel="noreferrer" target="_blank">
              <i className="pe-md-5 bi bi-github"></i>
            </a>
            <a href="https://antotogames.itch.io/" rel="noreferrer" target="_blank">
              <i className="pe-md-5 fab fa-itch-io"></i>
            </a>
            <a href="https://www.linkedin.com/in/antony-derache-9780b5181/" rel="noreferrer" target="_blank">
              <i className="pe-md-5 bi bi-linkedin"></i>
            </a>
            <div>
              <i className="pe-4 bi bi-envelope-fill"></i>
              <span>antony.derache@epitech.eu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;