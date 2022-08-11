import React, { useState, useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: "kavan",
    email: "example@example.com"
  });
 const {username, email} = formState;

  const onInputChange = ({target})=>{
    const {name,value}= target;
    setFormState({
      ...formState,
      [name]:value
    })
  }

  useEffect(() => {
    //console.log("useffect called")
  }, []);
  
  useEffect(() => {
    //console.log("form changed")
  }, [formState]);

  useEffect(() => {
    //console.log("email changed")
  }, [email]);

  return (
    <>
        <h1>FS</h1>
        <hr />
        <input type="text" onChange={onInputChange} className="form-control" placeholder="Username" name="username" value={username} />
        <input type="email" onChange={onInputChange} className="form-control mt-2" placeholder="example@example.com" name="email" value={email} />

        
        {
          (username=="kavan") && <Message/>
        }
    </>
  )
}
