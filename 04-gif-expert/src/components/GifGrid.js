import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export default function GifGrid({category}) {

const [images, setImages]= useState([]);

const getImages = async()=>{
  const newImages = await getGifs(category);
  setImages(newImages)
}


useEffect( ()=>{
  getImages();  
}, []);


  return (
    <>
        <h3>{ category }</h3>
        <ol>
          {images.map(({id, title, url})=>(
            <li key={id}>
              {title}
              <img src={url} alt="" />
            </li>
          ))}
        </ol>
    </>
  )
}
