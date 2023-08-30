import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceElement = (props) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: props.backColor, color: 'black' }}
      contentArrowStyle={{ borderRight: `7px solid ${props.backColor}` }}
      iconStyle={{ background: "#7fa7ec", color: 'black' }}
    >
      {props.skillsName &&
        <div className="d-flex align-items flex-wrap py-3">
          {
            props.skillsName.map((elem, i) => <div key={i} className="skillBubble fw-bold">{elem}</div>)
          }
        </div>
      }
      <h3 className="vertical-timeline-element-title">{props.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{props.substitle}</h4>
      <p>
        {props.description}
      </p>
    </VerticalTimelineElement>
  )
}

export default ExperienceElement;