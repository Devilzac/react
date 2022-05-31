import React from "react";
import propTypes from "prop-types";
//functional components

const PrimeraApp = ({ saludo, subtitulo })=>{

    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    )
}

PrimeraApp.propTypes={
    saludo:propTypes.string.isRequired,
}
PrimeraApp.defaultProps ={
    subtitulo: 'Soy un subtitulo',
}
export default PrimeraApp;