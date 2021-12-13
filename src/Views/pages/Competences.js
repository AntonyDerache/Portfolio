import React, { useEffect } from 'react';
import CompetenceItem from '../../components/CompetenceItem';
import PresentationScreen from '../../components/PresentationScreen';
import SkillsData from '../../helpers/SkillsData';

const Competences = ({updateIndex, t}) => {
    useEffect(() => {
        updateIndex(2);
    }, [updateIndex])

    return (
        <div id="skills" className="pages h-100 w-100">
            <PresentationScreen title={[t('skills.title')]} />
            <div className="content d-flex brown h-100">
                <div class="container fl">
                    <div class="row w-100">
                        { SkillsData.map((item, i) => <CompetenceItem key={i} classImg={item.class} name={t(item.name)} /> )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Competences;