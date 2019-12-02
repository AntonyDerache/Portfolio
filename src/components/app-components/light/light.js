import React, { Component } from 'react';

import Lampe from '../../../assets/lampe.jpg';

class Light extends Component {
    componentDidMount() {
        document.getElementById("home-page").style.opacity = .2;
        document.getElementById("back-light").style.opacity = .0;
    }

    render() {
        return (
            <div id="light">
                <h2 className="fl">Please recharge the energy</h2>
                <div id="home-page" className="full-width full-height">
                    <div id="light-bg" className="full-width full-height">
                        <img src={Lampe} alt="lampe first screen" />
                        <div className="zone-lamp full-width full-height fl">
                            <div id="back-light"></div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Light;