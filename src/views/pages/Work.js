import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import PresentationScreen from '../../components/PresentationScreen';
import ProjectBanner from '../../components/ProjectBanner';
import { bannerProjectsData } from '../../helpers/ProjectsData';

const Projects = ({updateIndex, t}) => {
    useEffect(() => {
        updateIndex(4);
    }, [updateIndex])

    return (
        <div id="work" className="pages w-100 h-100">
            <PresentationScreen title={[t("projects.title")]} />
            <div className="content w-100 h-100 red d-flex flex-column">
                {
                    bannerProjectsData && bannerProjectsData.map((item, i) => {
                        return (
                            <Link to={`/projects/${item.url}`} key={i}>
                                <ProjectBanner classBg={item.classBg} title={t(`projects.${item.title}.name`)}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Projects;