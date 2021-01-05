import React, { useState, useEffect } from 'react'

const Header = (props) => {
    const [mobil, setMobil] = useState(false);

    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 1024)
                setMobil(true);
        }

        if (window.innerWidth < 1024)
            setMobil(true);
        window.addEventListener('resize', updateSize);
        if (!document.getElementsByClassName("tab")[props.getIndex() - 1].classList.contains("underlined"))
            document.getElementsByClassName("tab")[props.getIndex() - 1].classList.add("underlined");
        return _ => {
            window.removeEventListener('resize', updateSize)}
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
        document.getElementById('background').scrollTo(0, 0);
        document.getElementsByClassName("tab")[props.getIndex() - 1].classList.remove("underlined");
        props.updateIndex(value);
        document.getElementsByClassName("tab")[value - 1].classList.add("underlined");
        if (window.innerWidth < 1024)
            clickBurger();
        else {
            let elem = document.getElementById("content")
            for (let child_idx = 0; child_idx < elem.children.length; child_idx++) {
                if (elem.children[child_idx].scrollTop > 0) {
                    elem.children[child_idx].scrollTop = 0
                    document.getElementById("header").classList.remove("is-not-top");
                    return;
                }
            }
        }
    }

    const buildTabNavigation = () => {
        let titleTab = ["home", "compétences", "expériences", "formations", "projets", "a propos"];

        return titleTab.map((title, i) => {
            return (
                <li key={i}><span className="tab" onClick={() => handleSwap(i + 1)}>{title}</span></li>
            )
        })
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
                        {buildTabNavigation()}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;