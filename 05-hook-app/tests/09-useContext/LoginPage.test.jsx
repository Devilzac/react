import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';


describe('Pruebas en el <LoginPage />', () => { 
    const user = {
        id:1,
        name:'Fernando'
    }


    beforeEach(()=> jest.clearAllMocks());

    test('debe de mostrar el componente sin el usuario', () => {
        render( 
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag= screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe("null");
        screen.debug();
    });

    
    test('debe de llamar al setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();
        render( 
            <UserContext.Provider value={{ user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect( setUserMock ).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "juan"}  );

    });

 })