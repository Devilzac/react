import React, {useState} from 'react';
import PropTypes from 'prop-types'; 

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("Hola mundo");

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const text = inputValue.trim();
        if(text.length <= 1) return;
       //setCategories(cats => [...cats,inputValue]);
       onNewCategory(text);
       setInputValue('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}