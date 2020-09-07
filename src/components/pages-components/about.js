import React from 'react';

const About = (props) => {
    return (
        <div id="about" className="pages full-width full-height">
            <h1>ABOUT {props.index}</h1>
            <div>Actuellement à Epitech Lille, j'ai fait le choix de m'orienter dans l'informatique, par passion de la technologie et de la création. J’ai développé ces passions en parallèle de mes études. J'apprenais à l'époque le dessin, qui m’a permis de développer des compétences en design.
Outre l'informatique, je pratique l'escalade encore aujourd'hui depuis 8 ans, c'est une activité importante pour mon développement personnel car elle me permet de décompresser et de me maintenir en forme.</div>
        </div>
    );
}

export default About;