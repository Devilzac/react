import React from 'react'
import { useEffect, useState } from 'react'

export const Message = () => {


    const [cords, setCords] = useState({x:0, y:0});

    useEffect(() => {
      const onMouseMove = ({x,y})=>{
        console.log(x,y)
        const cords = {x, y};
        setCords({cords});

      }
        const mouse = window.addEventListener("mousemove", onMouseMove);
        return () => {
           window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

  return (
    <>
    <h3>usuario ya existe</h3>
    {JSON.stringify(cords)}
    </>
  )
}
