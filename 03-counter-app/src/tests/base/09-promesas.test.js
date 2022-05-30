import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../data/heroes';


describe('Pruebas con promesas', () => { 

    test('getHeroeByIdAsync deberia retornar un heroe en async', ( done ) => { 
        const id =1;
        getHeroeByIdAsync(id)
        .then(h=>{
            console.log(h);
            expect(h).toBe(heroes[0]);
            done();
        });
    })

    test('debe retornar un error si el heroe no existe', ( done ) => { 
        const id =10;
        getHeroeByIdAsync(id).catch(error=>{
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
    })

})