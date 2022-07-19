import React from 'react'

export const GifGridItem = ({title, url,id}) => {
  return (
    <div className="card">
        <img width="400" height="200" src={url} alt={title}/>  
        <p>{title}</p>
    </div>

  )
}
