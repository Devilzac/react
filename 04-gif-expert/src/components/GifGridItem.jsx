import React from 'react';
import PropTypes from "prop-types";

export const GifGridItem = ({title, url,id}) => {
  return (
    <div className="card">
        <img width="400" height="200" src={url} alt={title}/>  
        <p>{title}</p>
    </div>

  )
}

GifGridItem.propTypes = {
  title: PropTypes.string. isRequired,
  url: PropTypes.string. isRequired,
}