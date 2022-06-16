import React from 'react'

export default function GifGrid({category}) {
const gifs =[1,2,3,4,5,6]

  return (
    <>
        <h3>{ category }</h3>
       {
        gifs.map(gif =>(
            <p key={gif}>gif</p>
            ))
       }
    </>
  )
}
