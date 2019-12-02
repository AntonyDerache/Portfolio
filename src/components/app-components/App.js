import React, { Component } from 'react';

import Header from '../header-components/Header'
import Light from './light/light';
import RealScreen from '../home/home';

import '../../stylesheets/all.css';

class App extends Component {
  componentDidMount() {
    document.getElementById("white-screen").style.opacity = 0;

  }

  render() {
    return (
      <div id="app" className="full-width full-height">
        <Header />
        <Light />
        <RealScreen />
        <div id="white-screen"></div>
      </div>
    );
  }
}

export default App;
