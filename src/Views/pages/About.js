import React from 'react';
import PresentationScreen from '../../components/PresentationScreen';

const About = (props) => {
    return (
        <div id="about" className="pages w-100 h-100">
            <PresentationScreen title={props.t('about.title')} imgClass={"about-background"}/>
            <p>{props.t('about.description')}</p>
        </div>
    );
}

export default About;