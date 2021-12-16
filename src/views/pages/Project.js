import React, { useEffect } from 'react';
import Caroussel from '../../components/Caroussel';

const GameOfLife = ({updateIndex, t, data}) => {
    useEffect(() => {
        updateIndex(4);
    }, [updateIndex])

    return (
        <div className="project-layout content">
            <div className="container">
                <div className="row">
                    <div className="d-flex">
                        <h2 className="fw-light d-flex">{t(`projects.${data.name}.name`)}</h2>
                        {
                            data.github &&
                                <h2 className="px-5">
                                    <a href={data.github} rel="noreferrer" target="_blank">
                                        <i className="cursor-pointer bi bi-github" />
                                    </a>
                                </h2>
                        }
                    </div>
                    <div className="col-8">
                        {
                            data.pictures && <Caroussel image={data.pictures} />
                        }
                    </div>
                    <div className="col-4 project-description d-flex justify-content-center flex-column ps-5">
                        <div className="fw-bold">{t(`projects.year`)}</div>
                        <p className="value">{data.year}</p>
                        <div className="fw-bold">{t(`projects.genre`)}</div>
                        <p className="value">{t(`projects.${data.name}.${data.genre}`)}</p>
                        <div className="fw-bold">{t(`projects.what`)}</div>
                        <p className="value">{t(`projects.${data.name}.${data.what}`)}</p>
                        <p>
                            {t(`projects.${data.name}.${data.description}`)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameOfLife;