import React, { useEffect } from 'react';

const Home = ({updateIndex, t}) => {
    useEffect(() => {
        updateIndex(1);
    }, [updateIndex])

    return (
        <div id="home" className="pages w-100 h-100">
            <div className="title-container fast-fade">
                <div className="img-container" id="ref-img">
                    <div className={`h-100 w-100 background`}></div>
                </div>
                <div className="title h-100 w-100 fl" id="ref-title">
                    <div className="mx-auto d-flex flex-column">
                        <span>{t("home.hello")}</span>
                        <span>{t("home.name")}</span>
                        <span className="subtitle">{t("home.job1")}</span>
                        <span className="subtitle">{t("home.job2")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;