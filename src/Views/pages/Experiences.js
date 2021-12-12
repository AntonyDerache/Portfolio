import React from 'react';
import { VerticalTimeline, } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceElement from '../../components/ExperienceElement';
import PresentationScreen from '../../components/PresentationScreen';

const Experiences = (props) => {
    return (
        <div id="experiences" className="pages w-100 h-100">
            <PresentationScreen title={props.t('experiences.title')} imgClass={"experiences-background"}/>
            <VerticalTimeline>
                <ExperienceElement
                    backColor={"#fff"}
                    skillsName={["NodeJS", "ExpressJS", "VueJS", "MongoDB", "Travis"]}
                    title={props.t('experiences.sobook.job')}
                    substitle={props.t('experiences.sobook.date')}
                    description={props.t('experiences.sobook.description')}
                />
                <ExperienceElement
                    backColor={"#fff"}
                    skillsName={["ReactJS", "NodeJS", "ExpressJS", "TypeScript", "AWS S3"]}
                    substitle={props.t('experiences.trackap.date')}
                    title={props.t('experiences.trackap.job')}
                    description={props.t('experiences.trackap.description')}
                />
                <ExperienceElement
                    backColor={"#fff"}
                    skillsName={["ReactJS", "NodeJS", "ExpressJS"]}
                    title={props.t('experiences.skipty.job')}
                    substitle={props.t('experiences.skipty.date')}
                    description={props.t('experiences.skipty.description')}
                />
                <ExperienceElement
                    backColor={"#fff"}
                    title={props.t('experiences.delpharm.job')}
                    substitle={props.t('experiences.delpharm.date')}
                    description={props.t('experiences.delpharm.description')}
                />
            </VerticalTimeline>
        </div>
    );
}

export default Experiences;