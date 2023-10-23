import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"
import PilotList from "../../Components/PilotList/PilotList"
import FilmList from "../../Components/FilmsList/FilmsList"
import { getRelatedObjects } from "../../services/api-calls"

const StarshipDetails = (props) => {
  const [pilots, setPilots] = useState([])
  const [films, setFilms] = useState([])

  //route based fetch see starshipDetailsDataLoader
  const starshipDetails = useLoaderData() 

  useEffect(() =>{
    let mounted = true
    const fetchPilotData = async() => {
      const pilotData = await getRelatedObjects(starshipDetails.pilots)
      if (mounted) {
        setPilots(pilotData)
      }
    }
    if(starshipDetails.pilots?.length>0){
      fetchPilotData()
    }
    return () => { mounted = false; }
  },[starshipDetails.pilots])
  
  useEffect(() =>{
    let mounted = true
    const fetchFilmData = async() => {
      const filmData = await getRelatedObjects(starshipDetails.films)
      if (mounted) {
        setFilms(filmData)
      }
    }
    if (starshipDetails.films?.length>0)
    fetchFilmData()
    return () => { mounted = false; }
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
      </div>
      <Link
        to="/starships"
      >
        <button>
          Back to All Starships
        </button>
      </Link>
    </div>  
    
  )
}

export default StarshipDetails