import { AuthContext } from "../../../src/auth/context/AuthContext";
import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Puebas en authReducer', () => { 
    
    test('Debe retornar el estado por defecto', () => { 
        const defaultState = {logged:false};
        const state =  authReducer(defaultState, {});
        console.log(defaultState)
        expect(state).toBe(defaultState);


    });

    test('Debe (login) llamar a el login y autenticar y establecer el nombre y logged en true', () => { 
   
        const defaultState = {logged:false};

        const action = {
            type: types.login,
            payload: {
                name:'kavan',
                id:'123'
            }
        }
        
        const state =  authReducer(defaultState, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload,
        });
    

    });

    test('debe de (logout) borrar el name del usuario y logged en false', () => { 
           
        const defaultState = {
            logged:true,
            user: {
                name:'kavan',
                id:'123'
            }
        };

        const action = {
            type: types.logout
        }
        
        const state =  authReducer(defaultState, action);
        
        expect(state).toEqual({logged: false});
    });


})