import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import Experiences from '@/views/pages/Experiences';
import About from '@/views/pages/About';
import Work from '@/views/pages/Work';
import Skills from '@/views/pages/Competences';
import Home from '@/views/pages/Home';
import Contact from '@/views/pages/Contact';
import Project from '@/views/pages/Project';
import Games from '@/views/Games';
import WithHeader from '@/components/WithHeader';
import WithoutHeader from '@/components/WithoutHeader';
import { hidePresScreen, switchNav } from '@/helpers/Scroll';
import { projectsData } from '@/helpers/ProjectsData';

const App = () => {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState<number>(1);
  const transition = useRef<HTMLDivElement>(null);
  const colorTab = useMemo<Array<string>>(() => ["green", "brown", "blue", "red", "purple"], []);

  useEffect(() => {
    var lang = localStorage.getItem("lang");
    if (lang) {
      i18n.changeLanguage(lang);
    }
    document.addEventListener('scroll', checkScroll)
    return () => {
      document.removeEventListener('scroll', checkScroll);
    }
  }, [i18n])

  useEffect(() => {
    if (transition.current) {
      const classListLength = transition.current.classList.length
      if (classListLength === 2) {
        transition.current.classList.remove(transition.current.classList[classListLength - 1]);
      }
      transition.current.classList.add(colorTab[index - 1]);
    }
    checkScroll();
  }, [colorTab, index])

  const checkScroll = () => {
    const refImg = document.getElementById("ref-img");
    const refTitle = document.getElementById("ref-title");
    const refChevron = document.getElementById("ref-chevron");
    const refNav = document.getElementById("header");
    hidePresScreen(refImg, refTitle, refChevron);
    switchNav(refNav);
  }

  const updateIndex = (newIndex: number) => {
    if (newIndex !== index) {
      setIndex(newIndex);
    }
  }

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
          <Route path="/projects/forest-boy" element={<Project t={t} updateIndex={updateIndex} data={projectsData.find(data => data.name === 'forestBoy')!} />} />
          <Route path="/projects/game-of-life" element={<Project t={t} updateIndex={updateIndex} data={projectsData.find(data => data.name === 'gameOfLife')!} />} />
          <Route path="/projects/3d-pong" element={<Project t={t} updateIndex={updateIndex} data={projectsData.find(data => data.name === 'pong')!} />} />
          <Route path="/projects/astro-brawl" element={<Project t={t} updateIndex={updateIndex} data={projectsData.find(data => data.name === 'astroBrawl')!} />} />
          <Route path="/projects/rewinder" element={<Project t={t} updateIndex={updateIndex} data={projectsData.find(data => data.name === 'rewinder')!} />} />
          <Route path="/projects/api-save" element={<Project t={t} updateIndex={updateIndex} data={projectsData.find(data => data.name === 'apiSave')!} />} />
          <Route path="/projects/epicture" element={<Project t={t} updateIndex={updateIndex} data={projectsData.find(data => data.name === 'epicture')!} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
