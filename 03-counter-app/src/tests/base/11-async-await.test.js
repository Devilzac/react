import { getImagen } from "../../base/11-async-await";

describe('Pruebas con async await', () => { 
    test('debe de retornar el URL de la imagen', async()=>{
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
        
    });
    
    test('debe de retornar un GIF', async()=>{
        const url = await getImagen();
        expect(url.includes('.gif')).toBe(true);        
    });
})