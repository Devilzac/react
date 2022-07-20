import React from 'react';
import { render } from '@testing-library/react';
import GifGridItem from '../src/components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas de <GifGridItem />', () => {


    test('debe de resetear', ()=>{
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
              
     
    });

});