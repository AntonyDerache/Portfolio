import React, { Component } from 'react'

import NoBatteryRed from '../../assets/no-battery-red.png';
import NoBatteryWhite from '../../assets/no-battery.png';
import Reload from '../../assets/reload-energy.png';

class Header extends Component {
    constructor() {
        super();
        this.state = { time: null, mobil: false }
        this.reloadEnergy = this.reloadEnergy.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        let timer = 0;

        if (window.innerWidth <= 1024)
            this.setState({ mobil: true });
        window.addEventListener('resize', this.updateDimensions);
        document.getElementById("reload").style.opacity = .2;
        this.setState({ time: setInterval(() => {
                timer++;
                if (timer % 4 === 0)
                    document.getElementById("battery").setAttribute("src", NoBatteryRed);
                else
                    document.getElementById("battery").setAttribute("src", NoBatteryWhite);
            }, 300)
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    shouldComponentUpdate(nextState) {
        if (nextState.mobil !== this.state.mobil)
            return true;
    }

    updateDimensions() {
        if (window.innerWidth <= 1024) {
            this.setState({ mobil: true });
            document.getElementById("burger").style.display = "block";
            document.getElementById("nav-bar").style.display = "none";
        } else if (window.innerWidth >= 1024) {
            this.setState({ mobil: false });
            document.getElementById("nav-bar").style.display = "block";
        }
    }

    fullIconOpacity(e) {
        e.target.style.opacity = 1;
    }

    noIconOpacity(e) {
        e.target.style.opacity = .2;
    }

    timeOut() {
        let timeWhiteScreen = setTimeout(() => {
            document.getElementById("white-screen").style.opacity = 1;
            document.getElementById("white-screen").classList.add("anime-white-screen");
            clearTimeout(timeWhiteScreen);
        }, 1900)
        let timeBatterie = setTimeout(() => {
            clearInterval(this.state.time);
            document.getElementById("icon-energy").style.display = "none";

            let timeNewPage = setTimeout(() => {
                document.getElementById("white-screen").style.opacity = 0;
                document.getElementById("light").style.display = "none";
                document.getElementById("newBackground").style.display = "block";
                if (!this.state.mobil)
                    document.getElementById("nav-bar").style.display = "block";
                else
                    document.getElementById("burger").style.display = "block";


                let timeNewContent = setTimeout(() => {
                    document.getElementById("square").style.opacity = 1;
                    document.getElementById("white-screen").style.display = "none";

                    let timeNavBar = setTimeout(() => {
                        let elem = document.getElementsByTagName("li");
                        for (let i = 0; elem[i]; i++)
                            elem[i].style.opacity = 1;
                        clearTimeout(timeNavBar);
                    }, 500);
                    clearTimeout(timeNewContent);
                }, 500)
                clearTimeout(timeNewPage);
            }, 1000)
            clearTimeout(timeBatterie);
        }, 2000)
    }

    reloadEnergy() {
        document.getElementById("home-page").style.opacity = 1;
        document.getElementById("back-light").style.opacity = .2;
        document.getElementById("back-light").style.boxShadow = "box-shadow: 0px 0px 350px 350px #eee7c6";
        document.getElementById("home-page").classList.add("anim-lightning");
        document.getElementById("back-light").classList.add("anim-back-lightning");
        this.timeOut();
    }

    clickBurger() {
        if (document.getElementById("burger").classList.contains("is-active")) {
            document.getElementById("nav-bar").style.display = "none";
            document.getElementById("burger").style.color = "white";
            document.getElementById("burger").classList.remove("is-active");
        } else {
            document.getElementById("nav-bar").style.display = "block";
            document.getElementById("burger").style.color = "black";
            document.getElementById("burger").classList.add("is-active");
        }
    }

    render() {
        return(
            <div id="header" className="full-width">
                <nav className="nav full-width full-height">
                    <div className="navBrand full-height"></div>
                    <div className="end-nav full-height full-width">
                        <div id="icon-energy">
                            <img id="battery" src={NoBatteryWhite} alt="no-battery-icon" />
                            <img id="reload" src={Reload} alt="relaod-energy-icon"
                                onMouseEnter={this.fullIconOpacity}
                                onMouseLeave={this.noIconOpacity}
                                onClick={this.reloadEnergy}
                                />
                        </div>
                        {
                            this.state.mobil ?
                            <span onClick={this.clickBurger}
                                id="burger"
                                className="navbar-burger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span> : null
                        }
                        <ul id="nav-bar">
                            <li>compétences</li>
                            <li>expériences</li>
                            <li>formations</li>
                            <li>projets</li>
                            <li>about</li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;