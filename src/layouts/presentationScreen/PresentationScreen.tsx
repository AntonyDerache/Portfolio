import React from 'react';

export interface PresentationScreenProps {
  title: string
}

function PresentationScreen({ title }: PresentationScreenProps) {
  const scrollDown = () => {
    window.scrollBy(0, window.innerHeight);
  };

  return (
    <div className="title-container fast-fade">
      <div className="img-container" id="ref-img">
        <div className="h-100 w-100 background" />
      </div>
      <div className="title h-100 w-100 fl" id="ref-title">
        <div className="mx-auto d-flex flex-column">
          <span className="w-100">
            {title}
          </span>
        </div>
      </div>
      <div className="position-absolute bottom-0 w-100 fl">
        <button type="button" onClick={scrollDown}>
          <i
            id="ref-chevron"
            className="bi bi-chevron-compact-down pb-5 cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}

export default PresentationScreen;
