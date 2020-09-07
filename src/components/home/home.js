import React, { useState, useEffect } from 'react';

import Competences from '../pages-components/competences';
import Experiences from '../pages-components/experiences';
import About from '../pages-components/about';
import Projets from '../pages-components/projets';
import Formation from '../pages-components/formations';
import Main from '../pages-components/main';

const Home = (props) => {
    useEffect(() => {
        let width = document.getElementById("content").clientWidth;

        document.getElementById("content").style.left = (width * (props.index - 1) * -1).toString() + "px";
    })

    return (
        <div id="background" className="full-width full-height">
            <div id="content" className="full-width full-height">
                <Main/>
                <Competences/>
                <Experiences/>
                <Formation/>
                <Projets/>
                <About/>
            </div>
        </div>
    );
}

export default Home;