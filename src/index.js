/* Modules */
import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css"

/* Components */
import App from './Containers/App/index';

/* Service Worker */
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
