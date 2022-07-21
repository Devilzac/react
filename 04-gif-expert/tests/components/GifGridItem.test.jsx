import React from 'react';
import { render } from '@testing-library/react';
import {GifGridItem} from '../../src/components';

describe('Pruebas de <GifGridItem />', () => {

    const title = "dr strange";
    const url="google.com";
    const id= 1;
    test('debe de ser igual al snapshot', ()=>{

        const {container} = render(<GifGridItem title={title} url={url} id={id} />);              
        expect(container).toMatchSnapshot();
    });

});