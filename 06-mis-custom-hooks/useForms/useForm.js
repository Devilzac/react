import React, { useState, useEffect } from 'react';

export const useForm = (initialForm = {}) => {
    /*
        {
            username: "kavan",
            email: "example@example.com",
            password: ""
        }
    */
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({target})=>{
    const {name,value}= target;
    setFormState({
      ...formState,
      [name]:value
    })
  }

  const onResetForm = ()=>{
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
