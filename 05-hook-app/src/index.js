import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import './index.css';
//import { HooksApp } from "./HooksApp";
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FormWithCustomHook />
);