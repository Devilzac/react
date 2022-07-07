import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';
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
        <div className='card-grid'>
          {images.map( (images) =>(
            <GifGridItem key={images.id} 
              {...images}
            />
          ))}
        </div>
    </>
  )
}
