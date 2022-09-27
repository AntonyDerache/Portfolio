import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Caroussel from '../../components/Caroussel';

const GameOfLife = ({updateIndex, t, data}) => {
    const [pc, setPc] = useState(false);

    useEffect(() => {
        if (window.navigator.platform.indexOf('Mac') > -1 || window.navigator.platform.indexOf('Win') > -1) {
            setPc(true);
        }
    }, [])

    useEffect(() => {
        updateIndex(4);
    }, [updateIndex])

    return (
        <div className="project-layout content">
            <div className="container">
                <div className="row">
                    <Link to="/projects" className="back">
                        <i className="bi bi-arrow-left-circle"></i>
                    </Link>
                    <div className="d-flex social">
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
                    <div className="col-xl-8">
                        {
                            data.pictures && <Caroussel image={data.pictures} />
                        }
                    </div>
                    <div className="col-xl-4 project-description d-flex justify-content-center flex-column ps-xl-5">
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
                    { pc && data.installer &&
                        <div className="w-100 text-center pb-5">
                            <h2 className="fw-light pb-5">{t(`projects.download`)}</h2>
                            <div className="d-flex justify-content-around">
                                <div className="h3">
                                    <a download href={"/installer/" + data.installer.win}>
                                        <div
                                            className="btn btn-info justify-content-center text-white d-flex flex-column"
                                            style={{ width: '200px', height: '70px' }}>
                                            <h4>Windows x86</h4>
                                            <i className="cursor-pointer fa fa-download" />
                                        </div>
                                    </a>
                                </div>
                                <div className="h3">
                                    <a download href={"/installer/" + data.installer.mac}>
                                        <div
                                            className="btn btn-success justify-content-center text-white d-flex flex-column"
                                            style={{ width: '200px', height: '70px' }}>
                                            <h4>MacOs</h4>
                                            <i className="cursor-pointer fa fa-download" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    }
                    { pc && data.hasWebGL ?
                        <div className="w-100 pb-5">
                            <h2 className="fw-light pb-5">{t(`projects.playIt`)}</h2>
                            <div className="d-flex justify-content-center py-5 w-100">
                                <div className='w-75' style={{ aspectRatio: "16/9" }}>
                                    <iframe
                                        title={`Play ${data.name}`}
                                        allow="autoplay; fullscreen"
                                        src={`/#/games/gameOfLife`}
                                        scrolling="no"
                                        // frameborder="0"
                                        height="100%" width="100%"
                                    >
                                    </iframe>
                                </div>
                            </div>
                        </div> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default GameOfLife;