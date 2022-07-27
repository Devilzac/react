import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('puebas con componente <addCategory/>', () => {
    const name = "Saitama";
    test('debe de cambiar el valor de la caja de texto ', () => { 
        render(<AddCategory onNewCategory={ ()=>{} }/>)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target:{value: name} });
        expect( input.value ).toBe(name)
     })
});
