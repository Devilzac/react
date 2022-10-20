/**
 * @jest-environment jsdom
 */

import { act, renderHook } from "@testing-library/react";
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter hook', () => { 
    
    test('Debe de retornar valores por defecto', () => {
        const {result} = renderHook( ()=>useCounter() );
        const {counter, decrement, increment, reset} = result.current;
        
        expect(counter).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });   
    
    test('Debe de retornar el valor de 100', () => {
        const valor = 100;
        const {result} = renderHook( ()=>useCounter(valor) );
        const {counter, decrement, increment, reset} = result.current;
        expect(counter).toBe(100);
    });   

    test('Debe de decrementar el valor de 100 en 1', () => {
        const valor = 100;
        const {result} = renderHook( ()=>useCounter(valor) );
        const {counter, decrement, increment, reset} = result.current;
        act(() => {
            decrement();
        });

        expect(result.current.counter).toBe(99);
    });  
    test('Debe de incrementar el valor de 100 en 1', () => {
        const valor = 100;
        const {result} = renderHook( ()=>useCounter(valor) );
        const {counter, decrement, increment, reset} = result.current;
        act(() => {
            increment();
        });

        expect(result.current.counter).toBe(101);
    });   

    
    test('Debe de resetear el valor', () => {
        const valor = 100;
        const {result} = renderHook( ()=>useCounter(valor) );
        const {counter, decrement, increment, reset} = result.current;
        act(() => {
            increment();
            reset();
        });

        expect(result.current.counter).toBe(100);
    }); 


 })