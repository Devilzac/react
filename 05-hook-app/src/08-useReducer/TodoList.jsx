import React, {memo} from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = memo(({todos = []}) => {
    
  return (
    <>
        <ul className='list-group'>
            {
                todos.map( todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }                   
        </ul>
    </>
  )
})
