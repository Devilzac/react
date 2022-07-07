import React from 'react'

export default function GifGrid({category}) {
const gifs =[1,2,3,4,5,6]

  const getGifs = async() =>{
      const url = `api.giphy.com/v1/gifs/search?api_key=Ou0703LsEf749kBDtdGQ3LFYwMCtzHgs&q=${category}`;
      const respuesta = await fetch(url);
      const { data } = await respuesta.json();
      console.log(respuesta);
  }
  getGifs();


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
