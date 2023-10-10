const { render, screen, getByRole, fireEvent } = require("@testing-library/react")
const { MemoryRouter,useNavigate } = require("react-router-dom")
const { SearchPage } = require("../../../src/heroes/pages/SearchPage")
const { default: queryString } = require("query-string")


const mockedUseNavigate = jest.fn();
const mockedSubmit = jest.fn();


jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=>mockedUseNavigate,
}));

describe('pruebas en <SearchPage />', () => { 
    
    beforeEach(()=> jest.clearAllMocks());

    test('Debe de mostrarse correctamente con valores por defecto  ', () => { 

        const {container} = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )
        
        expect(container).toMatchSnapshot()
       
    })
    
    test('Debe de mostrar a Batman y el input con el valor del query string  ', () => { 
        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )
        const result = screen.getByRole('textbox').value
        const img = screen.getByRole('img').src
        const dev = screen.getByLabelText('alert-danger').style.display
        
        expect(result).toBe('batman')
        expect(img).toContain('/src/assets/heroes/dc-batman.jpg')
        expect(dev).toBe('none')
       
    })

    test('debe de mostrar un error si no se encuentra el heroe', () => { 

        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=asd']}>
                <SearchPage/>
            </MemoryRouter>
        )
        const dev = screen.getByLabelText('alert-danger').style.display
        expect(dev).toBe('')

     })

     test('debe de llamar el navigate a la pantalla nueva', () => { 
                
        const {container} = render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        )
        
        const input = screen.getByRole('textbox');
        const form = screen.getByTestId('searchHero');
        const value = 'batman'

        fireEvent.change(input, {target:{
            name: 'searchText',
            value: value
        }});


        fireEvent.submit(form);
        expect(input.value).toBe(value);
        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${value}`);

        
      })

 })