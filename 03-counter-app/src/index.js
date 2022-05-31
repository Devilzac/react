//antes 
/*
import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

const saludo = <h1>Hola mundo</h1>;

console.log(saludo)

const divRoot = document.querySelector("#root");

ReactDOM.render(  <CounterApp value={123} />, divRoot);

*/



import React from 'react';
import { createRoot } from 'react-dom/client';
//import CounterApp from './CounterApp';
import './index.css';
import PrimeraApp from './PrimeraApp';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(  <PrimeraApp saludo='hola' />);
//root.render(  <CounterApp value={123} />);
