import React, {memo,useRef, useState} from 'react';
import { useForm } from '../hooks';

export const TodoAdd = memo(({onNewTodo}) => {

    const {description,onInputChange,onResetForm} = useForm({
        description:''
    })
    

    const inputRef = useRef();

    const onFormSubmit = (e)=>{
        e.preventDefault();
        
        if( description.length <=1) return;

        const newTodo = {
            id: new Date().getTime(),
            done:false,
            description,
        }
        
        onNewTodo(newTodo)
        onResetForm();
    }
    
  return (
        <form onSubmit={onFormSubmit}>
            <input type="text"
            placeholder='Que hay que hacer?'
            className='form-control' 
            name='description'
            value={description}
            onChange={onInputChange}
            />
            <button type="submit"
            className='btn btn-primary mt-1'
            >
                Agregar
            </button>
        </form>
  )
})
