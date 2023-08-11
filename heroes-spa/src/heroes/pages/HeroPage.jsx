import { Navigate, useParams } from "react-router-dom"
import { getHeroByID } from "../helpers/";

export const HeroPage = () => {

  const {id} = useParams();
  const hero = getHeroByID(id);

  if(!hero){
    return <Navigate to="/marvel" />
  }
  console.log(hero);
  return (
    <h1>
    </h1>
  )
}
