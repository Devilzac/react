const persona ={
    nombre: 'kavan',
    apellido: 'rodriguez',
    edad: 29,
    direccion:{
        ciudad: 'cerdanyola del valles',
        zip: '999',
    }
}
const persona2 = {...persona}
persona2.nombre= 'cris' 
console.log(persona)
console.log(persona2)