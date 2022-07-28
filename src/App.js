import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Header from './views/Header'
import Experiences from './views/pages/Experiences';
import About from './views/pages/About';
import Work from './views/pages/Work';
import Skills from './views/pages/Competences';
import Home from './views/pages/Home';
import Contact from './views/pages/Contact';
import Project from './views/pages/Project';
import { hidePresScreen, switchNav } from './helpers/Scroll';
import { projectsData } from './helpers/ProjectsData';
import './assets/sass/main.scss';

const App = () => {
    const { t, i18n } = useTranslation();
    const [index, setIndex] = useState(1);
    const transition = useRef(null);
    const colorTab = useMemo(() => ["green", "brown", "blue", "red", "purple"], []);

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
        const classListLength = transition.current.classList.length
        if (classListLength === 2) {
          transition.current.classList.remove(transition.current.classList[classListLength - 1]);
        }
        transition.current.classList.add(colorTab[index - 1]);
        checkScroll();
    }, [colorTab, index])

     const checkScroll = () => {
        const ref_img = document.getElementById("ref-img");
        const ref_title = document.getElementById("ref-title");
        const ref_chevron = document.getElementById("ref-chevron");
        const ref_nav = document.getElementById("header");
        hidePresScreen(ref_img, ref_title, ref_chevron);
        switchNav(ref_nav);
    }

    const updateIndex = newValue => {
      if (newValue !== index) {
        setIndex(newValue);
      }
    }

    return (
        <div ref={transition} className="app">
            <Header index={index} t={t}/>
            <Routes>
                <Route path="/" element={<Home updateIndex={updateIndex} t={t} />} />
                <Route path="/skills" element={<Skills updateIndex={updateIndex} t={t} />} />
                <Route path="/experiences" element={<Experiences updateIndex={updateIndex} t={t} />} />
                <Route path="/about" element={<About updateIndex={updateIndex} t={t} />} />
                <Route path="/projects" element={<Work updateIndex={updateIndex} t={t} />} />
                <Route path="/contact" element={<Contact updateIndex={updateIndex} t={t} />} />
                <Route path="/projects/game-of-life" element={<Project t={t} updateIndex={updateIndex} data={projectsData.gameOfLife} />} />
                <Route path="/projects/astro-brawl" element={<Project t={t} updateIndex={updateIndex} data={projectsData.astroBrawl} />} />
                <Route path="/projects/epitech-jam" element={<Project t={t} updateIndex={updateIndex} data={projectsData.epitechJam} />} />
                <Route path="/projects/api-save" element={<Project t={t} updateIndex={updateIndex} data={projectsData.apiSave} />} />
                <Route path="/projects/epicture" element={<Project t={t} updateIndex={updateIndex} data={projectsData.epicture} />} />
            </Routes>
        </div>
    );
}

export default App;
