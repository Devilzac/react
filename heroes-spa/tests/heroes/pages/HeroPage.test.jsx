const { render, screen, getByRole, fireEvent } = require("@testing-library/react")
const { MemoryRouter,useNavigate, useParams } = require("react-router-dom")
const { default: queryString } = require("query-string")
const { HeroPage } = require("../../../src/heroes/pages/HeroPage");
const { useMemo } = require("react");
const { getHeroByID } = require("../../../src/heroes/helpers");


describe('Testing de <HeroPage />', () => { 

    test('should first', () => { 

        const t = render(           
                <MemoryRouter initialEntries={['/hero/batman']}>
                    <HeroPage/>
                </MemoryRouter>
        )
        

        screen.debug()
    
    })



 })
