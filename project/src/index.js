import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "./utils/axios"
import Rootroute from './router'
import {Provider} from 'react-redux'
import Store from './store/store'
Component.prototype.$axios=axios
ReactDOM.render(
    <Provider store={Store}>
        <Rootroute />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
