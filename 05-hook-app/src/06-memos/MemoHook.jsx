import React, {useMemo, useState} from 'react';
import { useCounter } from "../hooks"; 
import { Small } from './Small';


const heavyStuff = (iterationNumber=100)=>{
  for (let index = 0; index < iterationNumber; index++) {
    console.log("Ahí vamos");    
  }
  return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {
    const {counter, increment} = useCounter(4000);
    const [show, setShow] = useState(true);

  const memorizedValue = useMemo(()=>heavyStuff(counter), [counter]);

  return (
    <>
        <h1>Counter <Small value={counter} /></h1>
        <hr />

        <h4>{memorizedValue}</h4>
        <button 
            className='btn btn-primary m-1'
            onClick={()=>increment()}
        >+1</button>
        <button 
            className='btn btn-outline-primary m-1'
            onClick={()=>setShow(!show)}
        >Show / Hide { JSON.stringify(show)}</button>
    </>
  )
}
