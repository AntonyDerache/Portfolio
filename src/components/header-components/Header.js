import React, { Component } from 'react'

class Header extends Component {
    render() {
        return(
            <div id="header">
                <nav className="nav">
                    <div className="end-nav">
                        <span
                            id="burger"
                            className="navbar-burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;