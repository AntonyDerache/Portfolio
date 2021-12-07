import React from 'react';

const Main = (props) => {
    return (
        <div id="home" className="pages w-100 h-100">
            <div className="title-container">
                <div className="w-100">
                    <h1 className="name">antony derache</h1>
                    <h3>{props.t('main.job')}</h3>
                </div>
            </div>
        </div>
    );
}

export default Main;