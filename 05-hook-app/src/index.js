import React from 'react';
import ReactDOM from 'react-dom/client';
import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import './index.css';
//import { HooksApp } from "./HooksApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SimpleForm />
);