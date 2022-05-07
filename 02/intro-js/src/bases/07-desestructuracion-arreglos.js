
const personajes = ['goku', 'vegeta', 'trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
const [p1, p2, p3] = personajes;

console.table(p1, p2, p3);



const retornArreglo = ()=>{
    return ['ABC', 123];
}

const [letras,numeros] = retornArreglo();

console.log(letras,numeros);

// Tarea

const usesState = (valor)=>{
    return [valor, ()=>{console.log('hola mundo')}];
}

const [nombre, setNombre ] = usesState('kavan');

console.table(nombre)

setNombre();