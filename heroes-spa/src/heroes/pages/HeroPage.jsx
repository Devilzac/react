import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroByID } from "../helpers/";
import { useMemo } from "react";

export const HeroPage = () => {

  const {id} = useParams();
  const hero = useMemo(()=> getHeroByID(id), [id]);
  const navigate = useNavigate();
  const onNavigateBack = ()=>{
    navigate(-1);
  }
  

  if(!hero){
    return <Navigate to="/marvel" />
  }
  console.log(hero);
  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img src={`/src/assets/heroes/${id}.jpg`}
         alt=""
         className="img-thumbnail" />
         <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{ hero.alter_ego }</li>
          <li className="list-group-item"><b>Publisher: </b>{ hero.publisher }</li>
          <li className="list-group-item"><b>First appearance: </b>{ hero.first_appearance }</li>
         </ul>
         <h5>Characters</h5>
         <p>{hero.characters}</p>
         <button className="btn btn-outline-primary" onClick={ onNavigateBack }>Back</button>
      </div>
    </div>
  )
}
