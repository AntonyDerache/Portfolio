import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import Card from '../../components/Cards'
import PresentationScreen from '../../components/PresentationScreen';
import ProjectBanner from '../../components/ProjectBanner';

const Projects = ({updateIndex, t}) => {
    useEffect(() => {
        updateIndex(4);
    }, [updateIndex])

    return (
        <div id="projects" className="pages w-100 h-100">
            <PresentationScreen title={[t("projects.title")]} />
            <div className="content w-100 h-100 red d-flex flex-column">
                <Link to={`/projects/game-of-life`}>
                    <ProjectBanner classBg="ggj" title="Game of life"/>
                </Link>
                <ProjectBanner classBg="uj" title="Brawhalla"/>
                <ProjectBanner classBg="epicture" title="Epicture"/>
                <ProjectBanner classBg="bomberman" title="Bomberman"/>
                <ProjectBanner classBg="sk" title="Skipty"/>
            </div>
        </div>
    );
}

export default Projects;