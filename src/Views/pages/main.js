import React from 'react';

const Main = (props) => {
    return (
        <div id="home" className="pages full-width full-height padding-sections">
            <div className="full-width">
                <h1 className="name">antony derache</h1>
                <h3>{props.t('main.job')}</h3>
            </div>
        </div>
    );
}

export default Main;