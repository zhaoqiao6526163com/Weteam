import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import 'antd/dist/antd.css';
import App from './App';
import {Provider} from 'react-redux'
import Store from './store/store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={Store}>
 
    <App />
    </Provider>
    , document.getElementById('root'));
=======

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> efebff26767c34d90ea473e4ae6984b30dab879d

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
