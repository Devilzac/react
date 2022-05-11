import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';

/*
const saludo = <h1>Hola mundo</h1>;

console.log(saludo)
*/
const divRoot = document.querySelector("#root");

ReactDOM.render(<PrimeraApp />, divRoot);