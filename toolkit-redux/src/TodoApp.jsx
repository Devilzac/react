import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {
    const [todoId, settodoId] = useState(1)

    const {data: todo, isLoading } = useGetTodoQuery(todoId);

    const nextTodo = ()=>{
        return settodoId(todoId + 1);
    }
    const prevTodo = ()=>{   
        if (todoId===1) return;  
        return settodoId(todoId - 1);
    }
  return (
    <>
    <h1>Todos - RTK Query</h1>

    <hr />
    <h4>isLoading: {isLoading ? 'TRUE' : 'FALSE'}</h4>
    <pre>
        { 
        JSON.stringify(todo)
        }
    </pre>
    
    <button onClick={prevTodo}>Prev Todo</button>
    <button onClick={nextTodo}>Next Todo</button>
    {/* <ul>
        {todos.map(todo=>(
            <li key={todo.id}>
               <strong>{todo.completed ? 'DONE' : 'PENDING'}</strong> 
               {todo.title}
            </li>
        ))}
    </ul> */}
    </>
  )
}
