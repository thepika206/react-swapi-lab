import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"


const PersonDetails = () => {
  const location = useLocation()

  return (  
    <div className="container-centered">
      <div className="card card-big">
        <h2>Person details</h2>
        <h4>NAME: {location.state.person.name}</h4>
        <h4>GENDER: {location.state.person.gender}</h4>
        <h4>HEIGHT: {location.state.person.height}</h4>
        <h4>MASS: {location.state.person.mass}</h4>
        {/* <h4>HOMEWORLD: {location.state.person.homeworld}</h4> */}
        <Link
          to="/people"
          >
          Back to All People
        </Link>
      </div>
    </div>
  )
}

export default PersonDetails