import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';

export function GifGrid({category}) {

  const { images, isLoading} = useFetchGifs(category);
  console.log({images, isLoading, category});



  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && (<h1>cargando...</h1>) 
      }
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