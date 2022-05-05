// Desestructuracion

const persona = {
    nombre: "Kavan",
    edad: 99,
    clave: 'Ironman'
}
const { nombre, edad, clave } = persona;
//console.log(nombre, edad, clave);
/*
const returnPersona= ( usuario )=>{
    
const { nombre, edad, clave } = usuario;
    console.log(nombre, edad, clave)
}
*/
// pasar objeto como argumento para desestructurarlo
/*
const returnPersona= ( { nombre, edad, clave, rango = 'capitan' } )=>{
    console.log( edad,nombre, clave, rango)
}

returnPersona(persona);
*/

const useContext = ({nombre, edad, clave })=>{
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.2212,
            lng: 23.333
        }
    }
}
const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona)
console.log({nombreClave, anios, lat, lng})