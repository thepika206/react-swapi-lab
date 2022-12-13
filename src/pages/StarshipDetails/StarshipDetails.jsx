import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import PilotList from "../../Components/PilotList/PilotList"
import FilmList from "../../Components/FilmsList/FilmsList"
import { getRelatedObjects } from "../../services/api-calls"
import { useEffect, useState } from "react"
import { getStarshipDetails } from "../../services/api-calls"



const StarshipDetails = (props) => {
  const [pilots, setPilots] = useState([])
  const [films, setFilms] = useState([])
  const [starshipDetails, setStarshipDetails] = useState ({})
  const { starshipId } = useParams()
  
  useEffect(()=>{
    const fetchStarshipData = async()=>{
      const starshipData = await getStarshipDetails(starshipId)
      setStarshipDetails(starshipData)

    }
    fetchStarshipData()
  },[starshipId])

  useEffect(() =>{
    const fetchPilotData = async() => {
      const pilotData = await getRelatedObjects(starshipDetails.pilots)
      setPilots(pilotData)
    }
    if(starshipDetails.pilots?.length>0){
      fetchPilotData()
    }
  },[starshipDetails.pilots])
  
  useEffect(() =>{
    const fetchFilmData = async() => {
      const filmData = await getRelatedObjects(starshipDetails.films)
      setFilms(filmData)
    }
    if (starshipDetails.films?.length>0)
    fetchFilmData()
  },[starshipDetails.films])

  


  return (  
    <div className="container-centered">
      <div className="card card-big">
        <h2>{starshipDetails.name}</h2>
        <h4>MODEL: {starshipDetails.model}</h4>
        <h4>MANUFACTURER: {starshipDetails.manufacturer}</h4>
        <h4>LENGTH: {starshipDetails.length}</h4>
        <h4>CREW: {starshipDetails.crew}</h4>
        <PilotList
          pilots = {pilots}
        />
        <FilmList
          films = {films}
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