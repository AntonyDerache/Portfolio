import React from 'react';

const ProjectsSidebar = () => {
    return (
        <div className="visually-hidden" id="project-sidebar">
            <div className="h-100 d-flex flex-column justify-content-center text-center">
                <span>Game of life</span>
                <i className="bi bi-dash-lg"></i>
                <span>Brawlala</span>
                <i className="bi bi-dash-lg"></i>
                <span>Egypt jam</span>
                <i className="bi bi-dash-lg"></i>
                <span>API sauvegarde</span>
                <i className="bi bi-dash-lg"></i>
                <span>Epicture</span>
            </div>
        </div>
    );
};

export default ProjectsSidebar;