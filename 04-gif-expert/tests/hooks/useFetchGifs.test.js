import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas de el hook useFetchGifs', () => {    

    const name = "one punch";

    test('debe de regresar el estado inicial', () => { 
        
        const { result } = renderHook( ()=>useFetchGifs(name) );
        const { images, isLoading } = result.current;
        
        expect( images. length ).toBe(0);
        expect( isLoading ).toBeTruthy();

     });

    test('debe de retornal un arreglo de imagenes y el isLoading en false', async() => { 

        const { result } = renderHook( ()=>useFetchGifs(name) );

        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0)
        );


        const { images, isLoading } = result.current;

        expect( images. length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
        
    });


});
