import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import PilotList from "../../Components/PilotList"
import { getPilots } from "../../services/api-calls"
import { useEffect, useState } from "react"


const StarshipDetails = () => {
  const [pilots, setPilots] = useState([])
  const location = useLocation()
  const pilotUrls = location.state.starship.pilots
  useEffect(() =>{
    const fetchPilotData = async() => {
      const pilotData = await getPilots(pilotUrls)
      setPilots(pilotData)
    }
    fetchPilotData()
  },[pilotUrls])


  return (  
    <div className="container-centered">
      <div className="card card-big">
        <h2>Starship details</h2>
        <h4>NAME: {location.state.starship.name}</h4>
        <h4>MODEL: {location.state.starship.model}</h4>
        <PilotList
          pilots = {pilots}
        />
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