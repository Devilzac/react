import { useMemo } from "react";
import { getHeroesbyPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";



export const HeroList = ({publisher}) => {
    let heroes = useMemo(()=>getHeroesbyPublisher(publisher), publisher); 
  return (    
    <div className="row g-3 justify-content-between">  
     {
        heroes.map((hero)=>{
            
            return(
                    <HeroCard key={hero.id} {...hero} />
                )
        })
     }
    </div>
  )
}
