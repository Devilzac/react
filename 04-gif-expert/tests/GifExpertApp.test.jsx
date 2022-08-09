import { render, screen, renderHook, waitFor,useState  } from "@testing-library/react";
import { GifExpertApp } from "../src/components";

describe('test en el componente <GifExpertApp />', () => {

    test('testing onAddCategory', () => {

        const { result } = renderHook( ()=>GifExpertApp());
        
        console.log(result.current.props);
        //const { images, isLoading } = result.current;

        render(<GifExpertApp />);
        //screen.debug();
    });

    
});
