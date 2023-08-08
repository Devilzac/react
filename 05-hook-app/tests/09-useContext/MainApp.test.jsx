import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('PRuebas en el componente <MainApp />', () => { 
    test('Debe de mostrar el Homepage', () => { 
        render( 
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy();
     });

     test('Debe de mostrar el LoginPage', () => { 
         render( 
             <MemoryRouter initialEntries={['login']}>
                 <MainApp />
             </MemoryRouter>
         );
         
        expect(screen.getByText('Login')).toBeTruthy();
      });

 })