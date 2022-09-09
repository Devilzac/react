import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import './index.css';
//import { HooksApp } from "./HooksApp";
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-UseLayoutEffect/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Layout />
);