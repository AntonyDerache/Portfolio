import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from './App';
import './helpers/i18n';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);

serviceWorker.unregister();
