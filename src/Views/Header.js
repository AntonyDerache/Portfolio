import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import FlagFr from "../assets/images/flag-fr.png";
import FlagGb from "../assets/images/flag-gb.png";
import { Link } from "react-router-dom";

const Header = (props) => {
    const [mobil, setMobil] = useState(false);
    const { t, i18n } = useTranslation();

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
        // document.getElementById('background').scrollTo(0, 0);
        document.getElementsByClassName("tab")[props.getIndex() - 1].classList.remove("underlined");
        props.updateIndex(value);
        document.getElementsByClassName("tab")[value - 1].classList.add("underlined");
        // if (window.innerWidth < 1024)
        //     clickBurger();
        // else {
        //     let elem = document.getElementById("content")
        //     for (let child_idx = 0; child_idx < elem.children.length; child_idx++) {
        //         if (elem.children[child_idx].scrollTop > 0) {
        //             elem.children[child_idx].scrollTop = 0
        //             document.getElementById("header").classList.remove("is-not-top");
        //             return;
        //         }
        //     }
        // }
    }

    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    const buildTabNavigation = () => {
        let titleTab = ["home", "skills", "experiences", "projects", "about"];
        let urlTab = ["", "skills", "experiences", "projects", "about"];

        return titleTab.map((title, i) => {
            return (
                // <li key={i}><span className="tab" onClick={() => handleSwap(i + 1)}>{t('header.' + titleTab[i])}</span></li>
                <li
                    key={i}>
                    <Link
                        to={`/${urlTab[i]}`}
                        className="tab"
                        onClick={() => handleSwap(i + 1)}
                    >
                        {t('header.' + titleTab[i])}
                    </Link>
                </li>
            )
        })
    }

    return (
        <div id="header" className="w-100">
            <nav id="nav" className="w-100 h-100 show-nav">
                <div className="end-nav h-100 w-100">
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
                    <ul id="nav-bar" className="fl">
                        {buildTabNavigation()}
                        <div className="language">
                            <img onClick={() => switchLanguage("fr")} src={FlagFr} alt="france_flag"></img>
                            <img onClick={() => switchLanguage("en")} src={FlagGb} alt="great_britain_flag"></img>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;