import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas de <PrimeraApp />', () => {
  /*  test('debe de mostrar el mensaje Hola soy Goku', ()=>{
        const saludo = "Hola, soy Goku.";
        const { getByText } = render(<PrimeraApp saludo={saludo} />);
    
        expect(getByText(saludo)).toBeInTheDocument();
    })*/

    test('Debe de mostrar <PrimeraApp /> correctamente', ()=>{
        const saludos = "Hola, Soy Goku";
        const wrapper = shallow(<PrimeraApp saludo={saludos} />);
        expect(wrapper).toMatchSnapshot();
    });
    

    test('Debe de mostrar el subtitulo enviado por props', ()=>{
        const saludos = "Hola, Soy Goku";
        const subtitle = "Soy un subtitulo";
        const wrapper = shallow(
            <PrimeraApp saludo={saludos} subtitulo={subtitle} />
        );
        const textP = wrapper.find('p').text();
        expect(textP).toBe(subtitle);
    });
});