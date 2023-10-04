
import { render, screen } from "@testing-library/react";
import React from "react";
import { AuthContext, AuthProvider } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('pruebas en <PublicRoute />', () => { 
    test('debe de mostrar el child si esta autenticado', () => { 

         const contextValue = {
            logged:true,
            user:{
                name:'kavan',
                id: '123'
            }
         }
         const valueString = JSON.stringify(contextValue);
         Storage.prototype.setItem = jest.fn()
        render(

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        
        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
     })

 })