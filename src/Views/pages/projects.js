import React from 'react';
import Card from '../../components/Cards'

const Projets = () => {
    return (
        <div id="projets" className="pages full-width full-height">
            <h2 className="fl full-width">projets</h2>
            <div className="project-content fl full-width">
                <Card id="skipty" classname="sk" title="Skipty" projet="Projet Stage" type="Site web"/>
                <Card id="united" classname="uj" title="United Jam" projet="Game Jam" type="jeu vidéo"/>
                <Card id="global-jam" classname="ggj" title="Epitech Jam" projet="Game Jam inter Epitech" type="jeu vidéo"/>
                <Card id="epic" classname="epicture" title="Epicture" projet="Projet 3e année" type="App web type imgur"/>
                <Card id="indie" classname="bomberman" title="Bomberman" projet="Projet graphique 2e année" type="jeu vidéo (Bomberman)"/>
                <Card id="epytodo" classname="epytodo" title="Epytodo" projet="Projet 1er année" type="Site web todolist"/>
            </div>
        </div>
    );
}

export default Projets;