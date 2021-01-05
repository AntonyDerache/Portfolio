import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experiences = () => {
    return (
        <div id="experiences" className="pages full-width full-height">
            <h2 className="fl full-width" style={{paddingBottom: 50}}>expériences</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 209, 199)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(0, 209, 199)' }}
                    iconStyle={{ background: 'rgb(0, 209, 199)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">2020 - 2021</h3>
                    <h4 className="vertical-timeline-element-subtitle">Developpeur front chez Trackap</h4>
                    <p>
                        Part-time 6 mois en tant que développeur web front-end au sein de la jeune entreprise Trackap
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid #fff' }}
                    iconStyle={{ background: '#fff', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">2019</h3>
                    <h4 className="vertical-timeline-element-subtitle">Developpeur fullstack chez Skipty</h4>
                    <p>
                        Stage 6 mois en tant que développeur web au sein de la startup Skipty
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid #fff' }}
                    iconStyle={{ background: '#fff', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">2018</h3>
                    <h4 className="vertical-timeline-element-subtitle">Operateur de conditionnement chez Delpharm Lille</h4>
                    <p>
                        CDD 1 mois en tant qu'operateur de conditionnement
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experiences;