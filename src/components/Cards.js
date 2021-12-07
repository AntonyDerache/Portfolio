import React, {useState, useEffect} from 'react';

const HiddenCard = (props) => {
    useEffect(() => {
        const activateCard = (active, title) => {
            if (active === true)
                document.getElementById("card " + title).classList.remove('hide');
            else
                document.getElementById("card " + title).classList.add('hide');
        }
        activateCard(props.active, props.title);
    }, [props.active, props.title])

    return (
        <div id={`card ${props.title}`} className="hide hideCard fl">
            <div className="cardTitle">{props.projet}</div>
            <div className="type">{props.type}</div>
            <div className="cross" onClick={() => {
                props.updateActive(false);
                document.getElementById("card " + props.title).classList.add('hide');
            }}>X</div>
        </div>
    )
}

const Card = props => {
    const [active, setActive] = useState(false)

    return (
        <div className="project-container fl">
            <div className={`project-box ${props.classname}`} onMouseEnter={() => document.getElementById(props.id).classList.remove("hidden")} onMouseLeave={() => {document.getElementById(props.id).classList.add("hidden"); if (active) setActive(false)}}>
                <HiddenCard
                    projet={props.projet} type={props.type} title={props.title}
                    active={active}
                    updateActive={setActive}/>
                <div>{props.title}</div>
                <div id={props.id} className="banner w-100 hidden">
                    <i className="info fl h-100 fas fa-info-circle" onClick={() => setActive(true)}></i>
                </div>
            </div>
        </div>
    )
}

export default Card;