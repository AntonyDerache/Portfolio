import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Header from './Views/Header'
import Experiences from './Views/pages/Experiences';
import About from './Views/pages/About';
import Projects from './Views/pages/Projects';
import Skills from './Views/pages/Competences';
import Main from './Views/pages/Main';
import { hidePresScreen, switchNav} from './helpers/Scroll';
import './assets/css/app.css';

const App = () => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(1);
    const transition = useRef(null);
    const colorTab = useMemo(() => ["gray", "orange", "blue", "red", "purple"], []);

    useEffect(() => {
        document.addEventListener('scroll', checkScroll)
        return () => {
            document.removeEventListener('scroll', checkScroll);
        }
    }, [])

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
        const ref_nav = document.getElementById("nav");
        hidePresScreen(ref_img, ref_title);
        switchNav(ref_nav);
    }

    const updateIndex = newValue => {
      if (newValue !== index) {
        setIndex(newValue);
      }
    }

    return (
        <div ref={transition} className="app">
            <Header index={index} />
            <Routes>
                <Route path="/" element={<Main updateIndex={updateIndex} t={t} />} />
                <Route path="/skills" element={<Skills updateIndex={updateIndex} t={t} />} />
                <Route path="/experiences" element={<Experiences updateIndex={updateIndex} t={t} />} />
                <Route path="/about" element={<About updateIndex={updateIndex} t={t} />} />
                <Route path="/projects" element={<Projects updateIndex={updateIndex} t={t} />} />
            </Routes>
        </div>
    );
}

export default App;
