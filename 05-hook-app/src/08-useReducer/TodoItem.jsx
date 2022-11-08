
export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {

  const borrar = ()=>{

  }
    
  return (
    <li className='list-group-item d-flex justify-content-between'>
        <span onClick={()=> onToggleTodo(todo.id)}
        aria-label='span'
        className={`align-self-center ${(todo.done) ? 'text-decoration-line-through':''}`}>{ todo.description }</span>
        <button
        aria-label='borrar' className='btn btn-danger' onClick={ ()=>onDeleteTodo(todo.id) }>Borrar</button>
    </li>
  )
}
