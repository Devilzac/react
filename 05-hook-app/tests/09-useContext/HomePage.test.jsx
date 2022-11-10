import { render, screen } from '@testing-library/react';
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/UserContext";

describe('pruebas en el componente de <HomePage />', () => { 
    
    test('debe de mostrar el componente sin el usuario', () => {
        render( 
            <UserContext>
                <HomePage />
            </UserContext>
        );

        screen.debug();
    });
 

 })