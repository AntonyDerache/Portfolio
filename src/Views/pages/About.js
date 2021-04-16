import React from 'react';

const About = (props) => {
    return (
        <div id="about" className="pages full-width full-height padding-sections">
            <h2 className="fl full-width">{props.t('about.title')}</h2>
            <p>{props.t('about.description')}</p>
        </div>
    );
}

export default About;