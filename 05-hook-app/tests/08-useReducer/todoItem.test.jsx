import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from '../../src/08-useReducer/TodoItem'

describe('tests en <TodoItem />', () => { 
    const todo = {
        id:1,
        description: 'piedra del alma',
        done: false,
    };
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(()=> jest.clearAllMocks());

    test('debe de mostrar el Todo pendiente de completar', () => {
        

        render( 
            <TodoItem  
                key={todo.id} 
                todo={todo} 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={onToggleTodoMock} 
            />
        );

        const liElement = screen.getByRole('listitem');
            expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        
 
    }); 

    test('debe de mostrar el Todo completado', () => {
        
        todo.done = true;

        render( 
            <TodoItem  
                key={todo.id} 
                todo={todo} 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={onToggleTodoMock} 
            />
        );

         const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
         
    }); 

    test('debe de llamar el ToggleTodo cuando se hace click', () => {
        
        render( 
            <TodoItem  
                key={todo.id} 
                todo={todo} 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={onToggleTodoMock} 
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

    });

    test('debe de llamar el DeleteTodo cuando se hace click', () => {
        
        render( 
            <TodoItem  
                key={todo.id} 
                todo={todo} 
                onDeleteTodo={ onDeleteTodoMock } 
                onToggleTodo={onToggleTodoMock} 
            />
        );
        const borrarElement = screen.getByLabelText('borrar');
        fireEvent.click(borrarElement);
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );


    });
    

 });