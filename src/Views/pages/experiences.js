import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experiences = (props) => {
    return (
        <div id="experiences" className="pages full-width full-height padding-sections">
            <h2 className="fl full-width" style={{ paddingBottom: 50 }}>{props.t('experiences.title')}</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 209, 199)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(0, 209, 199)' }}
                    iconStyle={{ background: 'rgb(0, 209, 199)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">2020 - 2021</h3>
                    <h4 className="vertical-timeline-element-subtitle">{props.t('experiences.trackap.job')}</h4>
                    <p>
                        {props.t('experiences.trackap.description')}
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid #fff' }}
                    iconStyle={{ background: '#fff', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">2019</h3>
                    <h4 className="vertical-timeline-element-subtitle">{props.t('experiences.skipty.job')}</h4>
                    <p>
                        {props.t('experiences.skipty.description')}
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid #fff' }}
                    iconStyle={{ background: '#fff', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">2018</h3>
                    <h4 className="vertical-timeline-element-subtitle">{props.t('experiences.delpharm.job')}</h4>
                    <p>
                        {props.t('experiences.delpharm.description')}
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experiences;