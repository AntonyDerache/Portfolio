import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import Burger from '../../components/Header/Burger/Burger';
import Menu from '../../components/Header/Menu/Menu';
import Languages from '../../components/Header/Languages';
import './header.scss';

const Header = (props) => {
  const [mobil, setMobil] = useState(false);
  const [index, setIndex] = useState(props.index);

  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const menuId = "main-menu";

  const titleTab = ["home", "skills", "experiences", "projects", "about"];
  const urlTab = ["", "skills", "experiences", "projects", "about"];


  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 992)
        setMobil(true);
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  useEffect(() => {
    if (!mobil) {
      document.getElementsByClassName("tab")[index - 1].classList.remove("underlined");
      if (!document.getElementsByClassName("tab")[props.index - 1].classList.contains("underlined"))
        document.getElementsByClassName("tab")[props.index - 1].classList.add("underlined");
    }
    setIndex(props.index);
  }, [index, props.index, mobil])

  const handleSwap = value => {
    if (mobil) {
      setOpen(false);
    } else {
      document.getElementsByClassName("tab")[index - 1].classList.remove("underlined");
      document.getElementsByClassName("tab")[value - 1].classList.add("underlined");
    }
  }

  const buildTabNavigation = () => {
    return titleTab.map((title, i) => {
      return (
        <li key={i}>
          <Link
            to={`/${urlTab[i]}`}
            className="tab small-caps"
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
            <div ref={node} className="w-100 h-100 d-lg-none d-flex align-items-center position-relative">
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu
                open={open}
                buildTabNavigation={buildTabNavigation}
                t={props.t}
                setOpen={setOpen}
                id={menuId}
              />
            </div>
          }
          <ul id="nav-bar" className="d-none d-lg-flex justify-content-lg-center align-items-lg-center position-relative">
            {buildTabNavigation()}
            <Languages t={props.t} />
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;