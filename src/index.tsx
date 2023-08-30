import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from "react-router-dom";

import App from '@/App';
import '@/helpers/i18n';
import '@/style/main.scss';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <HashRouter>
    <App/>
  </HashRouter>,
);
