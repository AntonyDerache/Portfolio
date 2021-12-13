import React from 'react';

const CompetenceItem = ({classImg, name}) => {
    return (
        <div className="col-xl-3 col-sm-6 col-md-4 py-5">
            <div className="box d-flex flex-column align-items-center mx-auto">
                <div className="h-75 w-75 fl">
                    <div className={`${classImg} background-image`}></div>
                </div>
                <div className="h-25 w-100 fl">
                    <span className="fw-bold text-capitalize">{name}</span>
                </div>
            </div>
        </div>
    )
}

export default CompetenceItem