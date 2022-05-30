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
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter( h => h.owner===owner);
        expect(heroes).toEqual(heroesData);
    });
    
    test('deve retornar un array con lenght 2', ()=>{
        const owner = 'Marvel';        
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
    });
})