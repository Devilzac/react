import {heroes} from '../data/heros';

export const getHeroByID = ( id )=>{
    return heroes.find( hero => hero.id === id);
}

