import { types } from "../../../src/auth/";

describe('prueba sobre los types', () => { 
    
    test('debe de regresar estos types', () => { 
        const type = {
            login:'[Auth] Login',
            logout:'[Auth] Logout',
        }
        expect(types).toEqual(type);
     })


 })