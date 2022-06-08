import React, { useState } from 'react'
import { AddCategory } from './AddCategory';

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
  return (
    <>
        <h2>gifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
        <ol>
            {
                categories.map((category) =>{
                    return <li key={ category } >{category}</li>;
                })
            }
        </ol>
        
    </>
  )
}
