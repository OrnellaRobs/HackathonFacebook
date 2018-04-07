import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import './index.css';
import App from './components/App';
import Test from './components/Test';
import { Router, Route } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <App />, document.getElementById('root')
);
registerServiceWorker();
