import React, { useEffect } from 'react';

const Main = ({updateIndex, t}) => {
    useEffect(() => {
        updateIndex(1);
    }, [updateIndex])

    return (
        <div id="home" className="pages w-100 h-100">
            <div className="title-container gray">
                <div className="w-100">
                    <h1 className="name">antony derache</h1>
                    <h3>{t('main.job')}</h3>
                </div>
            </div>
        </div>
    );
}

export default Main;