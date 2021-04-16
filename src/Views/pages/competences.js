import React from 'react';
import PropTypes from 'prop-types';
import CompetenceItem from '../../components/CompetenceItem';

const Competences = props => {
    return (
        <div id="skills" className="pages full-width full-height padding-sections">
            <div className="hard-skills">
                <h2 className="fl full-width">{props.t('skills.skills.title')}</h2>
                <ul>
                    <CompetenceItem classImg={"reactjs"} name={props.t('skills.skills.react')} />
                    <CompetenceItem classImg={"vuejs"} name={props.t('skills.skills.vue')} />
                    <CompetenceItem classImg={"nodejs"} name={props.t('skills.skills.node')} />
                    <CompetenceItem classImg={"html-css-js"} name={props.t('skills.skills.html')} />
                    <CompetenceItem classImg={"c"} name={props.t('skills.skills.c')} />
                    <CompetenceItem classImg={"cplusplus"} name={props.t('skills.skills.cpp')} />
                    <CompetenceItem classImg={"unity"} name={props.t('skills.skills.unity')} />
                    <CompetenceItem classImg={"python"} name={props.t('skills.skills.python')} />
                </ul>
            </div>
            <div className="soft-skills">
                <h2 className="fl full-width">{props.t('skills.extraSkills.title')}</h2>
                <ul>
                    <CompetenceItem classImg={"photoshop"} name={props.t('skills.extraSkills.photoshop')} />
                    <CompetenceItem classImg={"anglais"} name={props.t('skills.extraSkills.english')} />
                    <CompetenceItem classImg={"permis"} name={props.t('skills.extraSkills.driving')} />
                </ul>
            </div>
        </div>
    );
}

Competences.propTypes = {
    t: PropTypes.any,
}

export default Competences;