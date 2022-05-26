import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";


describe('Pruebas es 02-template-string', () => {
    test('getSaludo debe devolver hola + string', () => {
        const nombre = "Kavan";
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    });

    
    test('getSaludo debe devolver hola Carlos si no hay string', () => {
        const nombre = "Carlos";
        const saludo = getSaludo();
        expect(saludo).toBe('Hola ' + nombre);
    });
});
