import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"


const StarshipDetails = () => {
  const location = useLocation()

  return (  
    <>
      <div className="card card-big">
        <h2>Starship details</h2>
        <h4>NAME: {location.state.starship.name}</h4>
        <h4>MODEL: {location.state.starship.model}</h4>
        <Link
          to="/"
          >
          Back to All Starships
        </Link>
      </div>
    </>
  )
}

export default StarshipDetails