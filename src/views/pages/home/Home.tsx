import React, { useEffect } from 'react';
import type { TFunction } from 'i18next';

import './home.scss';

export interface HomeProps {
  updateIndex: (index: number) => void,
  t: TFunction
}

function Home({ updateIndex, t }: HomeProps) {
  useEffect(() => {
    updateIndex(1);
  }, [updateIndex]);

  return (
    <div id="home" className="pages w-100 h-100">
      <div className="title-container fast-fade">
        <div className="img-container" id="ref-img">
          <div className="h-100 w-100 background" />
        </div>
        <div className="title h-100 w-100 fl" id="ref-title">
          <div className="d-flex flex-column">
            <span>{t('home.hello')}</span>
            <span>{t('home.name')}</span>
            <span className="subtitle">{t('home.job2')}</span>
            <span className="subtitle">{t('home.job1')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
