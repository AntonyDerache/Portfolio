import React, { useState, useEffect } from 'react';
import Header from '../header-components/Header'
import Home from '../home/home';

import '../../stylesheets/all.css';

const App = () => {
  const [index, setIndex] = useState(2);

  const updateIndex = newValue => {
    setIndex(newValue);
  }

  const getIndex = () => {
    return index;
  }

  return (
    <div id="app" className="full-width full-height">
      <Header updateIndex={updateIndex} getIndex={getIndex}/>
      <Home index={index}/>
    </div>
  );
}

export default App;
