import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"


const StarshipDetails = () => {
  const location = useLocation()

  return (  
    <div className="container-centered">
      <div className="card card-big">
        <h2>Starship details</h2>
        <h4>NAME: {location.state.starship.name}</h4>
        <h4>MODEL: {location.state.starship.model}</h4>
        <Link
          to="/starships"
          >
          Back to All Starships
        </Link>
      </div>
    </div>  
    
  )
}

export default StarshipDetails