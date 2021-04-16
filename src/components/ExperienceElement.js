import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
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
            <div className="flex align-items flex-wrap py-3">
            { props.skillsName &&
                props.skillsName.map((elem) => <div className="skillBubble">{elem}</div>)
            }
            </div>
            <h3 className="vertical-timeline-element-title">{props.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{props.substitle}</h4>
            <p>
                {props.description}
            </p>
        </VerticalTimelineElement>
    )
}

ExperienceElement.propTypes = {
    skillsName: PropTypes.array,
    backColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    substitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default ExperienceElement;