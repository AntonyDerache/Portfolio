import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Header = (props) => {
    const [mobil, setMobil] = useState(false);
    const { i18n } = useTranslation();
    const [index, setIndex] = useState(props.index);

    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 1024)
                setMobil(true);
        }

        if (window.innerWidth < 1024)
            setMobil(true);
        window.addEventListener('resize', updateSize);
        return _ => {
            window.removeEventListener('resize', updateSize)}
    }, [])

    useEffect(() => {
        document.getElementsByClassName("tab")[index - 1].classList.remove("underlined");
        if (!document.getElementsByClassName("tab")[props.index - 1].classList.contains("underlined"))
            document.getElementsByClassName("tab")[props.index - 1].classList.add("underlined");
        setIndex(props.index);
    }, [index, props.index])

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
        document.getElementsByClassName("tab")[index - 1].classList.remove("underlined");
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
                <li key={i}>
                    <Link
                        to={`/${urlTab[i]}`}
                        className="tab"
                        onClick={() => handleSwap(i + 1)}
                    >
                        {props.t('header.' + title)}
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
                        mobil &&
                        <span onClick={clickBurger}
                            id="burger"
                            className="navbar-burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    }
                    <ul id="nav-bar" className="d-flex justify-content-center">
                        {buildTabNavigation()}
                        <div className="languages">
                            <span
                                className="cursor-pointer text-uppercase px-3"
                                onClick={() => switchLanguage("fr")}
                            >
                                {props.t("header.fr")}
                            </span>
                            <span className="text-uppercase">/</span>
                            <span
                                className="cursor-pointer text-uppercase px-3"
                                onClick={() => switchLanguage("en")}
                            >
                                {props.t("header.en")}
                            </span>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;