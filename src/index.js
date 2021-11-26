import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Goroda} from "./Components/goroda";
import {FirstSectionTitle1} from "./Components/firstSectionTitle-1";
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaulState = {
    city: 'В Москве'
}

const reducer = (state = defaulState, action) => {
    switch (action.type) {
        case 'CHANGE_CITY' :
            console.log(action.payload)
            localStorage.setItem("city",`${action.payload}`);
            return {city: 1}
        default:
            return state
    }
}

const store = createStore(reducer)


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <FirstSectionTitle1 />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <Goroda/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('rootGoroda')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
