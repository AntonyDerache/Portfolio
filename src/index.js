import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app-components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
