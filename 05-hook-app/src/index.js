import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CallbackHook } from './06-memos/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';
//import { MemoHook } from './06-memos/MemoHook';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import './index.css';
//import { HooksApp } from "./HooksApp";
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-UseLayoutEffect/Layout';
//import { Memorize } from './06-memos/Memorize';
//import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoApp />
);