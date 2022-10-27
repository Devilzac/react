import { act, fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/03-examples/index"
import { useFetch } from "../../../src/hooks/useFetch";
import { useCounter } from "../../../src/hooks/useCounter";

jest.mock('../../../src/hooks/useFetch');

describe('pruebas en multipleCustomHooks', () => { 
    
    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });
        render(<MultipleCustomHooks />);
        expect( screen.getByText("Loading..."));
        expect( screen.getByText("Breaking bad Quotes"));

        const nextButton = screen.getByRole('button', {name: 'Next Quote' });

        expect(nextButton.disabled).toBeTruthy();

    });
    
    test('debe de mostrar un quote', () => {
        

        useFetch.mockReturnValue({
            data: [{
                author: 'kavan',
                quote: 'hello world'
            }],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('kavan')).toBeTruthy();
        expect(screen.getByText('hello world')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next Quote' });
        expect(nextButton.disabled).toBeFalsy();
    });


    test('debe de llamar a la funcion de incrementar', () => {
        
            
        const {counter, increment, decrement, reset} = useCounter(1);

        useFetch.mockReturnValue({
            data: [{
                author: 'kavan',
                quote: 'hello world'
            }],
            isLoading: false,
            hasError: null,

        });
        useCounter.mockReturnValue({
            data: [{
                author: 'kavan',
                quote: 'hello world'
            }],
            isLoading: false,
            hasError: null,

        });

        render(<MultipleCustomHooks />);
        
        const nextButton = screen.getByRole('button', {name: 'Next Quote' });

        act(()=>{
        increment();
        fireEvent.click(nextButton);

        });

        expect(increment).toHaveBeenCalled();



    });
    
    

 
 })