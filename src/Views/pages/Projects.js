import React, { useEffect } from 'react';
import Card from '../../components/Cards'
import PresentationScreen from '../../components/PresentationScreen';

const Projects = ({updateIndex, t}) => {
    useEffect(() => {
        updateIndex(4);
    }, [updateIndex])

    return (
        <div id="projects" className="pages w-100 h-100">
            <PresentationScreen title={t("projects.title")} />
            <div className="content fl w-100 red">
                <Card id="skipty" classname="sk" title="Skipty" projet="Projet Stage" type="Site web"/>
                <Card id="united" classname="uj" title="United Jam" projet="Game Jam" type="Jeu vidéo"/>
                <Card id="global-jam" classname="ggj" title="Epitech Jam" projet="Game Jam inter Epitech" type="Jeu vidéo"/>
                <Card id="epic" classname="epicture" title="Epicture" projet="Projet 3e année" type="App web type imgur"/>
                <Card id="indie" classname="bomberman" title="Bomberman" projet="Projet graphique 2e année" type="Jeu vidéo (Bomberman)"/>
                <Card id="epytodo" classname="epytodo" title="Epytodo" projet="Projet 1er année" type="Site web todolist"/>
            </div>
        </div>
    );
}

export default Projects;