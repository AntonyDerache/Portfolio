import React, { useEffect } from 'react';
import PresentationScreen from '../../components/PresentationScreen';

const About = ({updateIndex, t}) => {
    useEffect(() => {
        updateIndex(5);
    }, [updateIndex])

    return (
        <div id="about" className="pages w-100 h-100">
            <PresentationScreen title={[t('about.title')]} />
            <div className="content purple fl">
                <p>{t('about.description')}</p>
            </div>
        </div>
    );
}

export default About;