
export const TodoItem = ({todo}) => {

  const borrar = ()=>{

  }
    
  return (
    <li className='list-group-item d-flex justify-content-between'>
        <span className='align-self-center'>{ todo.description }</span>
        <button className='btn btn-danger' onClick={borrar}>Borrar</button>
    </li>
  )
}
