import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

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
