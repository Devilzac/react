/**
 * @jest-environment jsdom
 */

import { renderHook } from "@testing-library/react";
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter hook', () => { 
    
test('Debe de retornar valores por defecto', () => {
    const {result} = renderHook( ()=>useCounter() );
    console.log(result.current);
});


 })