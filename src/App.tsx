import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Experiences from '@/views/pages/experiences/Experiences';
import About from '@/views/pages/about/About';
import Work from '@/views/pages/work/Work';
import Skills from '@/views/pages/competences/Competences';
import Home from '@/views/pages/home/Home';
import Contact from '@/views/pages/contact/Contact';
import Project from '@/views/pages/project/Project';
import Games from '@/views/Games';
import projectsData from '@/helpers/projectsData';
import { hidePresScreen, switchNav } from '@/helpers/scroll';
import WithHeader from '@/layouts/WithHeader';
import WithoutHeader from '@/layouts/WithoutHeader';
import { ProjectData } from './types';

function App() {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState<number>(1);
  const transition = useRef<HTMLDivElement>(null);
  const colorTab = useMemo<Array<string>>(() => ['green', 'brown', 'blue', 'red', 'purple'], []);

  const checkScroll = () => {
    const refImg = document.getElementById('ref-img');
    const refTitle = document.getElementById('ref-title');
    const refChevron = document.getElementById('ref-chevron');
    const refNav = document.getElementById('header');
    hidePresScreen(refImg, refTitle, refChevron);
    switchNav(refNav);
  };

  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang) {
      i18n.changeLanguage(lang);
    }
    document.addEventListener('scroll', checkScroll);
    return () => {
      document.removeEventListener('scroll', checkScroll);
    };
  }, [i18n]);

  useEffect(() => {
    if (transition.current) {
      const classListLength = transition.current.classList.length;
      if (classListLength === 2) {
        transition.current.classList.remove(transition.current.classList[classListLength - 1]);
      }
      transition.current.classList.add(colorTab[index - 1]);
    }
    checkScroll();
  }, [colorTab, index]);

  const updateIndex = (newIndex: number) => {
    if (newIndex !== index) {
      setIndex(newIndex);
    }
  };

  const findProjectData = (name: string): ProjectData => projectsData
    .find((data: ProjectData) => data.name === name)!;

  return (
    <div ref={transition} className="app">
      <Routes>
        <Route element={<WithoutHeader />}>
          <Route path="/games/:name" element={<Games data={projectsData} />} />
        </Route>
        <Route element={<WithHeader index={index} t={t} />}>
          <Route path="/" element={<Home updateIndex={updateIndex} t={t} />} />
          <Route path="/skills" element={<Skills updateIndex={updateIndex} t={t} />} />
          <Route path="/experiences" element={<Experiences updateIndex={updateIndex} t={t} />} />
          <Route path="/about" element={<About updateIndex={updateIndex} t={t} />} />
          <Route path="/projects" element={<Work updateIndex={updateIndex} t={t} />} />
          <Route path="/contact" element={<Contact updateIndex={updateIndex} />} />
          <Route path="/projects/forest-boy" element={<Project t={t} updateIndex={updateIndex} data={findProjectData('forestBoy')} />} />
          <Route path="/projects/skull-king-score" element={<Project t={t} updateIndex={updateIndex} data={findProjectData('skullKingScore')} />} />
          <Route path="/projects/game-of-life" element={<Project t={t} updateIndex={updateIndex} data={findProjectData('gameOfLife')} />} />
          <Route path="/projects/3d-pong" element={<Project t={t} updateIndex={updateIndex} data={findProjectData('pong')} />} />
          <Route path="/projects/astro-brawl" element={<Project t={t} updateIndex={updateIndex} data={findProjectData('astroBrawl')} />} />
          <Route path="/projects/rewinder" element={<Project t={t} updateIndex={updateIndex} data={findProjectData('rewinder')} />} />
          <Route path="/projects/api-save" element={<Project t={t} updateIndex={updateIndex} data={findProjectData('apiSave')} />} />
          <Route path="/projects/epicture" element={<Project t={t} updateIndex={updateIndex} data={findProjectData('epicture')} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
