import React, { useState } from 'react';
import propTypes from "prop-types";

const CounterApp = ({value}) => {
    const handleAdd = (e)=>{
        console.log(e);
        return 1;
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
            <button onClick={handleAdd}>+1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: propTypes.number.isRequired,
}
export default CounterApp;
