import React from 'react';

export interface ProjectBannerProps {
  classBg: string;
  title: string;
};

const ProjectBanner = ({ classBg, title }: ProjectBannerProps) => {
  return (
    <div className="project-banner w-100 position-relative cursor-pointer">
      <div className={`${classBg} position-absolute bg d-flex w-100 h-100`}></div>
      <div className="position-absolute w-100 h-100 opac-bg"></div>
      <h2 className="h-100 position-relative d-flex justify-content-center align-items-center">
        <span>{title}</span>
      </h2>
    </div>
  );
};

export default ProjectBanner;