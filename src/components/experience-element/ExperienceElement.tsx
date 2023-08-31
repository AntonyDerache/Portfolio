import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import './experienceElement.scss';
import 'react-vertical-timeline-component/style.min.css';

export interface ExperienceElementProps {
  backColor: string;
  skillsName?: Array<string>;
  title: string;
  substitle: string;
  description: string;
}

function ExperienceElement({
  backColor, skillsName, title, substitle, description,
}: ExperienceElementProps) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: backColor, color: 'black' }}
      contentArrowStyle={{ borderRight: `7px solid ${backColor}` }}
      iconStyle={{ background: '#7fa7ec', color: 'black' }}
    >
      {skillsName
        && (
        <div className="d-flex align-items flex-wrap py-3">
          {
            skillsName.map((elem: string) => <div key={elem} className="skillBubble fw-bold">{elem}</div>)
          }
        </div>
        )}
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{substitle}</h4>
      <p>
        {description}
      </p>
    </VerticalTimelineElement>
  );
}

ExperienceElement.defaultProps = {
  skillsName: [],
};

export default ExperienceElement;
