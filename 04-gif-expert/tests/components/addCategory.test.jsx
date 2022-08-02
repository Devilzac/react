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

     test('Debe de llamar a onNewCategory si el imput tiene un valor', () => {         
        const inputValue = "Saitama";
        //todo
            render(<AddCategory onNewCategory={ ()=>{} }/>);
            const input = screen.getByRole("textbox");
            const form = screen.getByRole("form");
            fireEvent.input(input, {target:{value: inputValue}});
            fireEvent.submit(form);
            expect(input.value).toBe("");
        })
});
