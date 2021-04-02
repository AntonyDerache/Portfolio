import React from 'react';

const Competences = (props) => {
    return (
        <div id="skills" className="pages full-width full-height padding-sections">
            <div className="hard-skills">
                <h2 className="fl full-width">{props.t('skills.skills.title')}</h2>
                <ul>
                    <li><div className="reactjs background-image"></div>{props.t('skills.skills.react')}</li>
                    <li><div className="nodejs background-image"></div>{props.t('skills.skills.node')}</li>
                    <li><div className="html-css-js"></div>{props.t('skills.skills.html')}</li>
                    <li><div className="c background-image"></div>{props.t('skills.skills.c')}</li>
                    <li><div className="cplusplus background-image"></div>{props.t('skills.skills.cpp')}</li>
                    <li><div className="unity background-image"></div>{props.t('skills.skills.unity')}</li>
                    <li><div className="python background-image"></div>{props.t('skills.skills.python')}</li>
                </ul>
            </div>
            <div className="soft-skills">
                <h2 className="fl full-width">{props.t('skills.extraSkills.title')}</h2>
                <ul>
                    <li><div className="photoshop background-image"></div>{props.t('skills.extraSkills.photoshop')}</li>
                    <li><div className="anglais background-image"></div>{props.t('skills.extraSkills.english')}</li>
                    <li><div className="permis background-image"></div>{props.t('skills.extraSkills.driving')}</li>
                </ul>
            </div>
        </div>
    );
}

export default Competences;