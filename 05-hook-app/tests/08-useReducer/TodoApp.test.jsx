import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';



describe('Puebas en <TodosApp /> ', () => {

    
    
    test('debe de mostrar el componente correctamente', () => {
        render(<TodoApp />);

       screen.debug();
    });
    
});
