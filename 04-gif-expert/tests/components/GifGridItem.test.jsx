import React from 'react';
import { render, screen } from '@testing-library/react';
import {GifGridItem} from '../../src/components';

describe('Pruebas de <GifGridItem />', () => {

    const title = "one punch";
    const url="https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2022/06/14/FE439D12-FDF3-46DF-816E-49C5B5E2F2BE/one-punch-man_98.jpg";
    const id= 1;
    const component = <GifGridItem title={title} url={url} id={id} />;

    test('debe de ser igual al snapshot', ()=>{
        const {container} = render(component);              
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el url y el alt indicado', () => { 
        
        render(component);   
        
        const {src , alt} = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(title); 
    });

    test('debe de mostrar el titulo en el componente', () => { 
        render(component);   
        expect(screen.getByText(title)).toBeTruthy();
        
    });
});