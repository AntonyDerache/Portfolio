import React from 'react';

export interface CompetenceCard {
  classImg: string;
  name: string;
}

const CompetenceCard = ({ classImg, name }: CompetenceCard) => {
  return (
    <div className="col-6 col-md-4 col-xl-3">
      <div className="box d-flex flex-column align-items-center mx-auto">
        <div className="h-75 w-75 fl">
          <div className={`${classImg} background-image`}></div>
        </div>
        <div className="h-25 w-100 fl">
          <span className="fw-bold hover:fw-bold text-uppercase fs-4 ">{name}</span>
        </div>
      </div>
    </div>
  )
}

export default CompetenceCard