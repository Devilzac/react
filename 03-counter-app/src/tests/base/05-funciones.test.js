import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo, saludar3 } from "../../base/05-funciones";



describe('P=ruebas en 05-funciones', () => { 

    test('debe de retornar un objeto', ()=>{
        const userTest = {
            uid:'ABC123',
            username:'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTest)
    });

    
    test('debe de retornar un objeto getUserActivo', ()=>{
        
        const nombre = 'Kavan';

        const user = getUsuarioActivo(nombre);
        expect(user).toEqual({
            uid:'ABC567',
            username: nombre
        })
    });
    
    test('debe de retornar Hola, nombre', ()=>{
        
        const nombre = 'Kavan';

        const user = saludar3(nombre);
        console.log(user);
        expect(user).toBe('Hola, ' + nombre);
    });

});