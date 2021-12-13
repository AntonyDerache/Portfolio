import React from 'react';

const PresentationScreen = (props) => {
    return (
        <div className="title-container fast-fade">
            <div className="img-container" id="ref-img">
                <div className={`h-100 w-100 background`}></div>
            </div>
            <div className="title h-100 w-100 fl fw-bold" id="ref-title"><span>{props.title}</span></div>
        </div>
    );
};

export default PresentationScreen;