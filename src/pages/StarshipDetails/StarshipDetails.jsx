import { useState } from "react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { getDetails } from "../../services/api-calls"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)

      setStarshipDetails(starshipData)
    }
    fetchDetails()
  },[location.state.starship.url])

  return (  
    <>
      <div className="card card-big">
        <h2>Starship details</h2>
        <h4>NAME: {starshipDetails.name}</h4>
        <h4>MODEL: {starshipDetails.model}</h4>
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