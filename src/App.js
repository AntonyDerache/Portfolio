import React, { useState } from 'react';
import Header from './Views/Header'
import Home from './Views/Home';

import './stylesheets/all.css';

const App = () => {
  const [index, setIndex] = useState(1);

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
