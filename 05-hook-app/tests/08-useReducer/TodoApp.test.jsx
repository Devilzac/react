import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');



describe('Puebas en <TodosApp /> ', () => {

    useTodos.mockReturnValue({
        todos: [
            {
                id:1,
                description: 'Todo #1',
                done: false
            },
            {
                id:2,
                description: 'Todo #2',
                done: true
            }
        ], 
        todosCount: 2, 
        pendingTodosCount: 1, 
        handleNewTodo: jest.fn(), 
        HandleToggleTodo: jest.fn(), 
        handleRemoveTodo: jest.fn()
    });
    
    test('debe de mostrar el componente correctamente', () => {
        render(<TodoApp />);

       // screen.debug();
    });
    
});
