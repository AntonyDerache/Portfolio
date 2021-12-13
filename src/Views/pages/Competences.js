import React, { useEffect } from 'react';
import CompetenceItem from '../../components/CompetenceItem';
import PresentationScreen from '../../components/PresentationScreen';

const Competences = ({updateIndex, t}) => {
    useEffect(() => {
        updateIndex(2);
    }, [updateIndex])

    return (
        <div id="skills" className="pages h-100 w-100">
            <PresentationScreen title={[t('skills.skills.title')]} />
            <div className="content d-flex orange">
                <div className="hard-skills col-6">
                    <h2 className="fl w-100">{t('skills.skills.title')}</h2>
                    <ul>
                        <CompetenceItem classImg={"reactjs"} name={t('skills.skills.react')} />
                        <CompetenceItem classImg={"vuejs"} name={t('skills.skills.vue')} />
                        <CompetenceItem classImg={"nodejs"} name={t('skills.skills.node')} />
                        <CompetenceItem classImg={"html-css-js"} name={t('skills.skills.html')} />
                        <CompetenceItem classImg={"c"} name={t('skills.skills.c')} />
                        <CompetenceItem classImg={"cplusplus"} name={t('skills.skills.cpp')} />
                        <CompetenceItem classImg={"unity"} name={t('skills.skills.unity')} />
                        <CompetenceItem classImg={"python"} name={t('skills.skills.python')} />
                    </ul>
                </div>
                <div className="soft-skills col-6">
                    <h2 className="fl w-100">{t('skills.extraSkills.title')}</h2>
                    <ul>
                        <CompetenceItem classImg={"photoshop"} name={t('skills.extraSkills.photoshop')} />
                        <CompetenceItem classImg={"anglais"} name={t('skills.extraSkills.english')} />
                        <CompetenceItem classImg={"permis"} name={t('skills.extraSkills.driving')} />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Competences;