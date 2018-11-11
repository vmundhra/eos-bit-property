import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/effra/stylesheet.css';
import './semantic/dist/semantic.min.css';
import './index.css';
import configureStore from './configureStore';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
