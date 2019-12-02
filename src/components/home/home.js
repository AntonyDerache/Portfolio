import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div id="newBackground" className="full-width full-height">
                <div id="square" className="draw full-width full-height">
                    <div id="social-media">
                        <div className="zone-icon fl">
                            <div className="circle fl">
                                <i className="color fas fa-at fa-2x"></i>
                            </div>
                        </div>
                        <div className="zone-icon fl">
                            <div className="circle fl">
                                <i className="color fab fa-linkedin-in fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;