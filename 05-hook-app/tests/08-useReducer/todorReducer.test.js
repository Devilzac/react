import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('pruebas en todoTeducer', () => { 

    const initialState=[{
        id:1,
        description:'Demo Todo',
        done: false,
    }];

    test('debe de regresar el estado inicial', () => {        
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });


    test('debe de agregar un todo', () => {
        const action = {
            type: '[TODO] add Todo',
            payload: {
                id:2,
                description:'nuevo todo',
                done: false
            }
        };

        
        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);

        expect(newState).toContain(action.payload);
    });
    

    test('debe de borrar un todo', () => {
        
        const actionRemove = {
            type: '[TODO] remove Todo',
            payload: 1
        };

        const newState2 = todoReducer(initialState, actionRemove);
        
        expect(newState2.length).toBe(0);

    });

    test('debe de realizar el toggle de el todo (done= true)', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBe(false);


    });
    


})