import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from "redux";
import {rootReducer} from "./store/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk),) );

const app = <Provider store={store}>
    <App/>
</Provider>;

render(app, document.getElementById('root'));
