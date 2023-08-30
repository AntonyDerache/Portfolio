import React from 'react';

export interface PresentationScreenProps {
  title: string
}

const PresentationScreen = ({ title } :PresentationScreenProps) => {
  const scrollDown = () => {
    window.scrollBy(0, window.innerHeight);
  }

  return (
    <div className="title-container fast-fade">
      <div className="img-container" id="ref-img">
        <div className={`h-100 w-100 background`}></div>
      </div>
      <div className="title h-100 w-100 fl" id="ref-title">
        <div className="mx-auto d-flex flex-column">
          {
            title.length > 0 && title.map((value, i) => {
              return (
                <span key={i} className="w-100">
                  {value}
                </span>
              )
            })
          }
        </div>
      </div>
      <div className="position-absolute bottom-0 w-100 fl">
        <i
          id="ref-chevron"
          className="bi bi-chevron-compact-down pb-5 cursor-pointer"
          onClick={scrollDown}
        />
      </div>
    </div>
  );
};

export default PresentationScreen;