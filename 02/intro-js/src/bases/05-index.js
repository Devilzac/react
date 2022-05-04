const saludar = function(nombre){
    return `Hola ${nombre}`;
}

const saludar2 = (nombre)=> {  return `Hola ${nombre}`;}
const saludar3 = (nombre)=> `Hola ${nombre}`;

console.log(saludar('goku'));
console.log(saludar2('vegeta'));
console.log(saludar3('bulma'));

const getUser = ()=>{
    return {
        uid: 'asd123',
        userName: 'andy123',
    }
}


console.log(getUser());

const user = getUser();

const getUsuarioActivo = (nombre)=>({
        uid:'123asdasd',
        username: nombre
    })

const userActive= getUsuarioActivo('kavan');
console.log(userActive);