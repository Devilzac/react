import React, {useState} from 'react';
import propTypes from "prop-types";

const CounterApp = ({value = 0}) => {
    
const [counter, setCounter] = useState(value);

    const handleAdd = ()=> setCounter(counter+1);    
    const handleReset = ()=> setCounter(value);
    const handleDecrease = ()=> setCounter(counter-1);


    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleDecrease}>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: propTypes.number,
}
export default CounterApp;
