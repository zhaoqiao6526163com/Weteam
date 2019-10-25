import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import {Provider} from 'react-redux'
import Store from './store/store'
<<<<<<< HEAD
import 'antd/dist/antd.css';
Component.prototype.$axios=axios
=======
import * as serviceWorker from './serviceWorker';

>>>>>>> 4cd706843f3c8ad7f2a62e263052eaff4f32a40e
ReactDOM.render(
    <Provider store={Store}>

    <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
