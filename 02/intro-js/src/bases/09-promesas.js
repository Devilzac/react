import { getHeroeById, getHeroeByOwner } from "../bases/08-import-export";
/*
const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve();
        const heroe = getHeroeById(6);
        resolve(heroe);
        //reject('no se pudo encontrar el heroe')
    },2000);
});

promesa.then((data)=>{
    console.table("then de la promesa", data);
})
.catch((err)=>{

    console.warn(err);
});
*/

const getHeroeByIdAsync = (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const heroe = getHeroeById(id);
            if(heroe == undefined){
                reject('no se pudo encontrar el heroe');
            }
            resolve(heroe);
        },2000);
    });
}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);