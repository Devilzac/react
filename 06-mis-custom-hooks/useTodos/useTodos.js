import {useReducer, useEffect, useState} from 'react';
import { todoReducer } from './todoReducer';



    const initialState = [];
    const init = ()=>{
        return JSON.parse( localStorage.getItem('todos') ) || [];
    }

export const useTodos = () => {
 
    const [todos, dispatch] = useReducer( todoReducer, initialState, init);
    const [counter, setCounter] = useState([]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || []);
        //console.log();
    }, [todos]);

    const handleNewTodo = (todo)=>{
        const action = {
            type: '[TODO] add Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const handleRemoveTodo = (id)=>{
        const action = {
            type: '[TODO] remove Todo',
            payload: id,
        }
        dispatch(action);
    }
    const HandleToggleTodo = (id)=>{
        console.log(id);
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }
        dispatch(action);

    }

    const todosCount = ()=>{
        return todos.length;
    }

    const pendingTodosCount = ()=>{
        return todos.filter((todo)=>{
            if(!todo.done){
                return todo;
            }
        }).length;
        
    }
    return {
        todos,
        handleNewTodo,
        HandleToggleTodo,
        handleRemoveTodo,
        todosCount,
        pendingTodosCount
    }
}
