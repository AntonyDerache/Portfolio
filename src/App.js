import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Header from './Views/Header'
// import Home from './Views/Home';
import Experiences from './Views/pages/Experiences';
import About from './Views/pages/About';
import Projects from './Views/pages/Projects';
import Skills from './Views/pages/Competences';
import Main from './Views/pages/Main';
import './assets/css/app.css';
import { hidePresScreen, switchNav} from './helpers/Scroll';

const App = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(1);
  const transition = useRef(null);
  const colorTab = ["gray", "orange", "blue", "red", "purple"];

  useEffect(() => {
    const getYScroll = () => {
      checkScroll();
    };
    const onMount = () => {
        transition.current.classList.add(colorTab[index - 1]);
        checkScroll();
        document.addEventListener('scroll', getYScroll)
    };
    onMount();
    return () => {
      document.removeEventListener('scroll', getYScroll);
    }
  }, [colorTab, index])

  const checkScroll = () => {
    const ref_img = document.getElementById("ref-img");
    const ref_title = document.getElementById("ref-title");
    const ref_nav = document.getElementById("nav");
    hidePresScreen(ref_img, ref_title);
    switchNav(ref_nav);
  }

  const updateIndex = newValue => {
    transition.current.classList.remove(colorTab[index - 1]);
    transition.current.classList.add(colorTab[newValue - 1]);
    setIndex(newValue);
  }

  const getIndex = () => {
    return index;
  }

  return (
      <div ref={transition} className="content gray">
        <Header updateIndex={updateIndex} getIndex={getIndex} />
        <Routes>
            <Route path="/" element={<Main index={index} t={t} checkScroll={checkScroll} />} />
            <Route path="/skills" element={<Skills index={index} t={t} checkScroll={checkScroll} />} />
            <Route path="/experiences" element={<Experiences index={index} t={t} checkScroll={checkScroll} />} />
            <Route path="/about" element={<About index={index} t={t} checkScroll={checkScroll} />} />
            <Route path="/projects" element={<Projects index={index} t={t} checkScroll={checkScroll} />} />
        </Routes>
      </div>
  );
}

export default App;
