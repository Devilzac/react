import { useState,useCallback, useEffect } from "react"
import { useCounter } from "../hooks"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    

    const incrementFather = useCallback(
      (value) => {
        setCounter((c)=>c + 5);
      },
      [],
    )
    /*
    useEffect(() => {
      incrementFather()
    }, [incrementFather])
    */
  return (
    <>
        <h1>useCallback Hook : { counter }</h1>
        <hr />
        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
