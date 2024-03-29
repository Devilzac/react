import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['one punch']);

    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories]);
    }

  return (
    <>
        <AddCategory 
            onNewCategory={ (value) => onAddCategory(value) }
        />
        <hr />
        {
            categories.map((category) =>(
                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />
                ))
        }
        
    </>
  )
}
