import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes, { owners } from '../../data/heroes';

describe('Pruebas en funciones de heroes 08', () => { 

    test('debe de retornar un heroe por id', ()=>{
        const id = 1;
        
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);
        const getByOwner = getHeroesByOwner();
        expect(heroe).toEqual(heroeData);
    });

    
    test('si heroe no existe', ()=>{
        const id = 10;        
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });


    
    
    test('deve retornar un array con los heroes', ()=>{
        const owner = 'DC';        
        const heroe = getHeroesByOwner(owner-);
        expect(heroe).toBe(undefined);
    });
})