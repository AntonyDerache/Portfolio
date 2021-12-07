import React, { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import Competences from './pages/Competences';
// import Experiences from './pages/Experiences';
// import About from './pages/About';
// import Projets from './pages/Projects';
// import Formation from './pages/Formations';
import Main from './pages/Main';

const Home = (props) => {
    useEffect(() => {
        let width = document.getElementById("content").clientWidth;

        document.getElementById("content").style.left = (width * (props.index - 1) * -1).toString() + "px";
    })

    const changeHeader = () =>{
        if (window.innerWidth <= 1024)
            return
        let elem = document.getElementById("content")
        for (let child_idx = 0; child_idx < elem.children.length; child_idx++) {
            if (elem.children[child_idx].scrollTop > 0) {
                document.getElementById("header").classList.add("is-not-top");
                return;
            } else
                document.getElementById("header").classList.remove("is-not-top");
        }
    }

    return (
        <div onScroll={changeHeader} className="w-100">
            <div id="content" className="w-100 h-100">
                <Main t={props.t}/>
                {/* <Competences t={t}/>
                <Experiences t={t}/>
                <Formation t={t}/>
                <Projets t={t}/>
                <About t={t}/> */}
            </div>
        </div>
    );
}

export default Home;