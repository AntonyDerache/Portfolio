import React from 'react';
import CompetenceItem from '../../components/CompetenceItem';
import PresentationScreen from '../../components/PresentationScreen';

const Competences = (props) => {
    return (
        <div id="skills" className="pages h-100 w-100">
            <PresentationScreen title={props.t('skills.skills.title')} imgClass={"skills-background"}/>
            <div className="d-flex">
                <div className="hard-skills col-6">
                    <h2 className="fl w-100">{props.t('skills.skills.title')}</h2>
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
                <div className="soft-skills col-6">
                    <h2 className="fl w-100">{props.t('skills.extraSkills.title')}</h2>
                    <ul>
                        <CompetenceItem classImg={"photoshop"} name={props.t('skills.extraSkills.photoshop')} />
                        <CompetenceItem classImg={"anglais"} name={props.t('skills.extraSkills.english')} />
                        <CompetenceItem classImg={"permis"} name={props.t('skills.extraSkills.driving')} />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Competences;