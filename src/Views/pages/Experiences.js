import React from 'react';
import { VerticalTimeline, } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceElement from '../../components/ExperienceElement';
import PresentationScreen from '../../components/PresentationScreen';
import { Chrono } from "react-chrono";

const Experiences = (props) => {
    const blue = "rgb(0, 209, 199)";
    const white = "#fff";

    const items = [{
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    }, {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    }]

    return (
        <div id="experiences" className="pages w-100 h-100">
            <PresentationScreen title={props.t('experiences.title')} imgClass={"experiences-background"}/>
            <Chrono
                items={items}
                mode="VERTICAL_ALTERNATING"
                theme={{
                    primary: "black",
                    secondary: "white",
                    cardBgColor: "white",
                    cardForeColor: "white",
                    titleColor: "black"
                }}
            />
            {/* <VerticalTimeline>
                <ExperienceElement
                    backColor={blue}
                    skillsName={["NodeJS", "ExpressJS", "VueJS", "MongoDB", "Travis"]}
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
                {/* <ExperienceElement
                    backColor={blue}
                    title={"none"}
                    substitle={"none"}
                    description={"none"}
                />
            </VerticalTimeline> */} */}
        </div>
    );
}

export default Experiences;