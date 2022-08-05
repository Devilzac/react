import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = "one punch";

    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);
        expect( screen.getByText('cargando...'));
        expect( screen.getByText( category ) );
     });

     test('Debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'CBA',
                title: 'goku',
                url: 'https://localhost/goku.jpg'
            }
        ];
        
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false
        });

        
        
        const {container} = render(<GifGrid category={ category }/>);              
        expect(container).toMatchSnapshot();
        expect(screen.getAllByRole('img').length).toBe(2);
      })
});
