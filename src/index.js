import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';
import 'bulma/css/bulma.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
