import React from 'react';
import { render } from '@testing-library/react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas de <CounterApp />', () => {
 
    test('Debe de mostrar <CounterApp /> correctamente', ()=>{
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
    });
    

    test('Debe de mostrar el valor de 100 correctamente', ()=>{
        const valor = 100;
        const wrapper = shallow(
            <CounterApp value={valor} />
        );
        const number = wrapper.find('h2').text().trim();
        expect(number).toBe('100'); 
    });

    test('debe de sumar 1', ()=>{
        const wrapper = shallow(<CounterApp />);
        const btn = wrapper.find('button').at(0).simulate('click');
        
        const number = wrapper.find('h2').text().trim();
        expect(number).toBe('1'); 
    
    });

    test('debe de restar 1', ()=>{
        const wrapper = shallow(<CounterApp />);
        const btn = wrapper.find('button').at(2).simulate('click');
        
        const number = wrapper.find('h2').text().trim();
        expect(number).toBe('-1'); 
     
    });

    test('debe de resetear', ()=>{
        const wrapper = shallow(<CounterApp value={100}/>);
        const btn = wrapper.find('button').at(0).simulate('click');
        const btn2 = wrapper.find('button').at(1).simulate('click');
        
        const number = wrapper.find('h2').text().trim();
        expect(number).toBe('100'); 
     
    });

});