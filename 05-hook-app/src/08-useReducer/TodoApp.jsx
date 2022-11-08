import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { useTodos } from '../hooks/';



export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, HandleToggleTodo, handleRemoveTodo} = useTodos();
    
  return (
    <>
        <h1>TodoApp: {todosCount(todos)}, <small>pendientes: {pendingTodosCount(todos)}</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">                        
               <TodoList todos={todos} onDeleteTodo={handleRemoveTodo} onToggleTodo={HandleToggleTodo} />
            </div>
            <div className="col-5">                
                <h4>Agregar TODO</h4>
                <hr />
               <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>
    </>
  )
}
