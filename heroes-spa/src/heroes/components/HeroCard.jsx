
import {Link} from 'react-router-dom';

export const HeroCard = ({id,superhero,first_appearance, alter_ego, characters}) => {
    const imgPath = `/src/assets/heroes/${id}.jpg`;
  return (
    <>
        <div className="col-3 p-0 card" key={id}>
            <img className="card-img-top" src={imgPath} alt={superhero} />
            
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <div className="card-text">
                    {
                        (alter_ego !== characters) && (<p>{characters}</p>)
                    }
                </div> 
                <p className="card-text"> 
                    
                   <small className="text-muted">{first_appearance}</small>
                </p>
                <Link to={`/hero/${ id }`} className="btn btn-primary">Mas...</Link>
            </div>
        </div>
    </>
  )
}
