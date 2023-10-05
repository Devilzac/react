import { fireEvent, getAllByText, getByRole, getByText, render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AppRouter } from "../../../src/router/AppRouter"
import { NavBar } from "../../../src/ui"


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=>mockedUseNavigate,
}));


describe('Pruebas en <NavBar />', () => { 

    const contextValue = {
                logged: true,
                user:{
                    name:'Kavan',
                    id: '123'
                },
                logout: jest.fn()
    }

    beforeEach(()=> jest.clearAllMocks());


    test('debe de mostrar el nombre del usuario', () => { 
  
          render(            
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <NavBar/>
                </AuthContext.Provider>
            </MemoryRouter>
          );

          expect(screen.getByText('Kavan')).toBeTruthy();

     })


     test('debe de llamar a navigate al simular el logout', () => { 
        
        render(            
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <NavBar/>
                </AuthContext.Provider>
            </MemoryRouter>
          );
               const btnLogout = screen.getByRole('button');
        
            fireEvent.click(btnLogout);
            expect(contextValue.logout).toHaveBeenCalled();
            expect(mockedUseNavigate).toHaveBeenCalledWith('/login',{replace:true});

      })

 })