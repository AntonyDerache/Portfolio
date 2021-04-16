import React from 'react';
import { VerticalTimeline, } from 'react-vertical-timeline-component';
import PropTypes from 'prop-types';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceElement from '../../components/ExperienceElement';

const Experiences = (props) => {
    const blue = "rgb(0, 209, 199)";
    const white = "#fff";

    return (
        <div id="experiences" className="pages full-width full-height padding-sections">
            <h2 className="fl full-width" style={{ paddingBottom: 50 }}>{props.t('experiences.title')}</h2>
            <VerticalTimeline>
                <ExperienceElement
                    backColor={blue}
                    skillsName={["NodeJS", "ExpressJS", "VueJS", "MongoDB"]}
                    title={props.t('experiences.sobook.date')}
                    substitle={props.t('experiences.sobook.job')}
                    description={props.t('experiences.sobook.description')}
                />
                <ExperienceElement
                    backColor={white}
                    skillsName={["ReactJS", "NodeJS", "ExpressJS", "TypeScript", "AWS S3"]}
                    substitle={props.t('experiences.trackap.job')}
                    title={props.t('experiences.trackap.date')}
                    description={props.t('experiences.trackap.description')}
                />
                <ExperienceElement
                    backColor={white}
                    skillsName={["ReactJS", "NodeJS", "ExpressJS"]}
                    title={props.t('experiences.skipty.date')}
                    substitle={props.t('experiences.skipty.job')}
                    description={props.t('experiences.skipty.description')}
                />
                <ExperienceElement
                    backColor={blue}
                    title={props.t('experiences.delpharm.date')}
                    substitle={props.t('experiences.delpharm.job')}
                    description={props.t('experiences.delpharm.description')}
                />
                {/* useless element do not fill */}
                <ExperienceElement
                    backColor={blue}
                    title={"none"}
                    substitle={"none"}
                    description={"none"}
                />
            </VerticalTimeline>
        </div>
    );
}

Experiences.propTypes = {
    t: PropTypes.any,
}

export default Experiences;