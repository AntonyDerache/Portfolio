import React, { useEffect } from 'react';
import CompetenceCard from '../../components/CompetenceCard';
import PresentationScreen from '../../layouts/presentationScreen/PresentationScreen';
import SkillsData from '../../helpers/SkillsData';

const Competences = ({ updateIndex, t }) => {
  useEffect(() => {
    updateIndex(2);
  }, [updateIndex])

  return (
    <div id="skills" className="pages h-100 w-100">
      <PresentationScreen title={[t('skills.title')]} />
      <div className="content d-flex brown h-100">
        <div className="container fl">
          <div className="row w-100 gy-5 py-5">
            {SkillsData.map((item, i) => <CompetenceCard key={i} classImg={item.class} name={t(item.name)} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;