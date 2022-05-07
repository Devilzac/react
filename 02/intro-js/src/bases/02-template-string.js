
const nombre = 'kavan'
const apellido = 'rodriguez'

const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)

function getSalud(nombre){
    return `Hola ${nombre}`
}

console.table(`este es un texto ${ getSalud(nombre)}`)