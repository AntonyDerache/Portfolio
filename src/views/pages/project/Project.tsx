import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { TFunction } from 'i18next';

import Caroussel from '@/components/Caroussel';
import type { ProjectData } from '@/types/projectData.types';
import './project.scss';

export interface GameOfLifeProps {
  updateIndex: (index: number) => void,
  t: TFunction,
  data: ProjectData
}

function GameOfLife({ updateIndex, t, data }: GameOfLifeProps) {
  const [pc, setPc] = useState(false);

  useEffect(() => {
    const platform = (window.navigator.userAgentData?.platform
      || window.navigator.platform).toLowerCase();

    if (platform.indexOf('mac') > -1 || platform.indexOf('win') > -1 || platform.indexOf('Linux') > -1 || !window.navigator.userAgentData?.mobile) {
      setPc(true);
    }
  }, []);

  useEffect(() => {
    updateIndex(4);
  }, [updateIndex]);

  return (
    <div className="project-layout content">
      <div className="container">
        <div className="row">
          <Link to="/projects" className="back">
            <i className="bi bi-arrow-left-circle" />
          </Link>
          <div className="d-flex social">
            <h2 className="fw-light d-flex">{t(`projects.${data.name}.name` as const)}</h2>
            {
              data.github
              && (
              <h2 className="ps-5">
                <a href={data.github} rel="noreferrer" target="_blank">
                  <i className="cursor-pointer bi bi-github" />
                </a>
              </h2>
              )
            }
            {
              data.itchio
              && (
              <h2 className="ps-5">
                <a href={data.itchio} rel="noreferrer" target="_blank">
                  <i className="cursor-pointer fab fa-itch-io" />
                </a>
              </h2>
              )
            }
          </div>
          <div className="col-xl-8">
            {
              data.pictures && <Caroussel image={data.pictures} />
            }
          </div>
          <div className="col-xl-4 project-description d-flex justify-content-center flex-column ps-xl-5">
            <div className="fw-bold">{t('projects.year')}</div>
            <p className="value">{data.year}</p>
            <div className="fw-bold">{t('projects.genre')}</div>
            <p className="value">{t(`projects.${data.name}.${data.genre}` as const)}</p>
            <div className="fw-bold">{t('projects.what')}</div>
            <p className="value">{t(`projects.${data.name}.${data.what}` as const)}</p>
            <p>
              {t(`projects.${data.name}.${data.description}`)}
            </p>
          </div>
          {pc && data.installer
            && (
            <div className="w-100 text-center pb-5">
              <h2 className="fw-light pb-5">{t('projects.download')}</h2>
              <div className="d-flex justify-content-around">
                <div className="h3">
                  <a download href={`/installer/${data.installer.win}`}>
                    <div
                      className="btn btn-info justify-content-center text-white d-flex flex-column"
                      style={{ width: '200px', height: '70px' }}
                    >
                      <h4>Windows x86</h4>
                      <i className="cursor-pointer fa fa-download" />
                    </div>
                  </a>
                </div>
                <div className="h3">
                  <a download href={`/installer/${data.installer.mac}`}>
                    <div
                      className="btn btn-success justify-content-center text-white d-flex flex-column"
                      style={{ width: '200px', height: '70px' }}
                    >
                      <h4>MacOs</h4>
                      <i className="cursor-pointer fa fa-download" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            )}
          {pc && data.hasWebGL
            ? (
              <div className="w-100 pb-5">
                <h2 className="fw-light pb-5">{t('projects.playIt')}</h2>
                <div>{t('projects.lagTips')}</div>
                <div className="d-flex justify-content-center py-5 w-100">
                  <div className="w-75" style={{ aspectRatio: '16/9' }}>
                    <iframe
                      title={`Play ${data.name}`}
                      allow="autoplay; fullscreen"
                      src={`/#/games/${data.name}`}
                      scrolling="no"
                      height="100%"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            ) : null}
        </div>
      </div>
    </div>
  );
}

export default GameOfLife;
