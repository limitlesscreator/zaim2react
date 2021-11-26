import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Goroda} from "./Components/goroda";
import {FirstSectionTitle1} from "./Components/firstSectionTitle-1";




ReactDOM.render(
  <React.StrictMode>
    <FirstSectionTitle1 city={'в Москве'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
    <React.StrictMode>
        <Goroda />
    </React.StrictMode>,
    document.getElementById('rootGoroda')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
