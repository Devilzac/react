import { renderHook, act } from "@testing-library/react";
import {useForm} from "../../src/hooks/useForm"
describe('test de useForm', () => { 
    
    test('debe de regresar los valores por defecto', () => {
        const initialForm = {
            name:"Kavan",
            email:"kavan@kavan.com"
        }
        const { result } = renderHook( () => useForm(initialForm));
        expect( result.current ).toEqual({
            "name": initialForm.name,
            "email": initialForm.email,
            "formState": initialForm,
            "name": "Kavan",
            "onInputChange":expect.any( Function ),
            "onResetForm":expect.any( Function ),
            }
        );

    });
    
    test('debe de cambiar el nombre de el formulario', () => {
        const newValue = "kavan2";
        const initialForm = {
            name:"Kavan",
            email:"kavan@kavan.com"
        }
        const { result } = renderHook( () => useForm(initialForm));


        
        const {onInputChange} = result.current;

        act(() => {
            onInputChange({target:{ name: 'name', value: newValue}});
        });

        
        expect( result.current.name ).toBe(newValue);
        expect( result.current.formState.name ).toBe(newValue);

    });
    
    
    test('debe de resetear el formulario', () => {
        const newValue = "kavan2";
        const initialForm = {
            name:"Kavan",
            email:"kavan@kavan.com"
        }
        const { result } = renderHook( () => useForm(initialForm));

        
        const {onInputChange, onResetForm} = result.current;

        act(() => {
            onInputChange({target:{ name: 'name', value: newValue}});
            onResetForm();
        });

        expect( result.current.name ).toBe(initialForm.name);
        expect( result.current.formState.name ).toBe(initialForm.name);

    });
    

 })