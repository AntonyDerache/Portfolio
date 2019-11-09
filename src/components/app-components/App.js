import React, { Component } from 'react';
import Header from '../header-components/Header'
import '../../stylesheets/all.css';

class App extends Component {
  constructor() {
    super()
    this.hoverProject = this.hoverProject.bind(this)
    this.stopHoverProject = this.stopHoverProject.bind(this)
  }

  hoverProject() {
      let idx = 0;

      let i = setInterval(() => {
        idx++
        if (idx === 3)
          clearInterval(i)
        document.getElementById("circle-" + idx).classList.add('scale')
      }, 100)
  }

  stopHoverProject() {
    for (let i = 1; i <= 3; i++) {
      document.getElementById("circle-" + i).classList.remove('scale')
    }
  }

  render() {
    return (
      <div className="app">
        <div className="home-page">
          <Header />
          <div className="title">
            <div className="test">
              <h1>Front-End Dev'</h1>
              <div>Antony Derache</div>
            </div>
          </div>
          <div className="logo-img">
            <div className="down" onMouseEnter={this.hoverProject} onMouseLeave={this.stopHoverProject}>
              <div id="circle-1" className="circle"></div>
              <div id="circle-2" className="circle"></div>
              <div id="circle-3" className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
