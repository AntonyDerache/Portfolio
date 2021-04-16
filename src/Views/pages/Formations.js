import React from 'react';

const Formations = (props) => {
    return (
        <div id="formations" className="pages full-width full-height padding-sections">
            <h2 className="fl full-width">{props.t('educations.title')}</h2>
            <h3>{props.t('educations.graduation')}<div>{props.t('educations.campus')}</div></h3>
            <h3>{props.t('educations.bac')}<div>{props.t('educations.highschool')}</div></h3>
        </div>
    );
}

export default Formations;