import React, { useState } from 'react'
import { AddCategory } from './AddCategory';

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories]);
    }

  return (
    <>
        <h2>gifExpertApp</h2>
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory={ (value) => onAddCategory(value) }
            />
        <hr />
        <ol>
            {
                categories.map((category) =>(
                        <div key={ category } >
                            <h3>{category}</h3>
                            <li>{category}</li>
                        </div>
                    ))
            }
        </ol>
        
    </>
  )
}
