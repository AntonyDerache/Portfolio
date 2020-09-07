import React, { useState, useEffect } from 'react'

const Header = (props) => {
    const [mobil, setMobil] = useState(false);

    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth <= 1024)
                setMobil(true);
        }

        if (window.innerWidth <= 1024)
            setMobil(true);
        window.addEventListener('resize', updateSize);
        if (!document.getElementsByClassName("tab")[props.getIndex() - 1].classList.contains("underlined"))
            document.getElementsByClassName("tab")[props.getIndex() - 1].classList.add("underlined");
        return _ => {
            window.removeEventListener('resize', updateSize) }
    }, [props])

    const clickBurger = () => {
        if (document.getElementById("burger").classList.contains("is-active")) {
            document.getElementById("nav-bar").style.display = "none";
            document.getElementById("burger").classList.remove("is-active");
        } else {
            document.getElementById("nav-bar").style.display = "block";
            document.getElementById("burger").classList.add("is-active");
        }
    }

    const handleSwap = value => {
        document.getElementsByClassName("tab")[props.getIndex() - 1].classList.remove("underlined");
        props.updateIndex(value);
        document.getElementsByClassName("tab")[value - 1].classList.add("underlined");
        if (window.innerWidth <= 1024)
            clickBurger();
    }

    return (
        <div id="header" className="full-width">
            <nav className="nav full-width full-height">
                <div className="end-nav full-height full-width">
                    {
                        mobil ?
                        <span onClick={clickBurger}
                            id="burger"
                            className="navbar-burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span> : null
                    }
                    <ul id="nav-bar">
                        <li><span className="tab" onClick={() => handleSwap(1)}>home</span></li>
                        <li><span className="tab" onClick={() => handleSwap(2)}>compétences</span></li>
                        <li><span className="tab" onClick={() => handleSwap(3)}>expériences</span></li>
                        <li><span className="tab" onClick={() => handleSwap(4)}>formations</span></li>
                        <li><span className="tab" onClick={() => handleSwap(5)}>projets</span></li>
                        <li><span className="tab" onClick={() => handleSwap(6)}>about</span></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;