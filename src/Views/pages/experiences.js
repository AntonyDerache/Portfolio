import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import PropTypes from 'prop-types';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceElement = (props) => {
    return (
         <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: props.backColor, color: 'black' }}
            contentArrowStyle={{ borderRight: `7px solid ${props.backColor}` }}
            iconStyle={{ background: props.backColor, color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">{props.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{props.subtitle}</h4>
            <p>
                {props.description}
            </p>
        </VerticalTimelineElement>
    )
}

ExperienceElement.propTypes = {
    backColor: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
}

const Experiences = (props) => {
    return (
        <div id="experiences" className="pages full-width full-height padding-sections">
            <h2 className="fl full-width" style={{ paddingBottom: 50 }}>{props.t('experiences.title')}</h2>
            <VerticalTimeline>
                <ExperienceElement
                    backColor={'rgb(0, 209, 199)'}
                    title={props.t('experiences.sobook.date')}
                    substitle={props.t('experiences.sobook.job')}
                    description={props.t('experiences.sobook.description')}
                />
                <ExperienceElement
                    backColor={'#fff'}
                    title={props.t('experiences.trackap.date')}
                    substitle={props.t('experiences.trackap.job')}
                    description={props.t('experiences.trackap.description')}
                />
                <ExperienceElement
                    backColor={'#fff'} fontColor={'#fff'}
                    title={props.t('experiences.skipty.date')}
                    substitle={props.t('experiences.skipty.job')}
                    description={props.t('experiences.skipty.description')}
                />
                 <ExperienceElement
                    backColor={'rgb(0, 209, 199)'} fontColor={'#fff'}
                    title={props.t('experiences.delpharm.date')}
                    substitle={props.t('experiences.delpharm.job')}
                    description={props.t('experiences.delpharm.description')}
                />
            </VerticalTimeline>
        </div>
    );
}

Experiences.propTypes = {
    t: PropTypes.any,
}

export default Experiences;