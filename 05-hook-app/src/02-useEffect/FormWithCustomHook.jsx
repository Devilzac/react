import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {
    /*
    {
        username: "kavan",
        email: "example@example.com",
        password: ""
      }
      */

    const {formState, onInputChange} = useForm({        
        username: "",
        email: "",
        password: ""
    });
    const {username, email, password} = formState;


  return (
    <>
        <h1>Formulario con custom hook</h1>
        <hr />
        <input type="text" onChange={onInputChange} className="form-control" placeholder="Username" name="username" value={username} />
        <input type="email" onChange={onInputChange} className="form-control mt-2" placeholder="example@example.com" name="email" value={email} />
        <input 
            type="password" 
            onChange={onInputChange} 
            className="form-control mt-2" 
            placeholder="Contraseña" 
            name="password" value={password} />

        
        {
          (username=="kavan") && <Message/>
        }
    </>
  )
}

