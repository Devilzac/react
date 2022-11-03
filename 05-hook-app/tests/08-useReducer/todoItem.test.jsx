import { render, screen } from "@testing-library/react";
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
            console.log(liElement);// falta terminarlo

    }); 

 });