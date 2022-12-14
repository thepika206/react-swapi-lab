import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getRelatedObjects } from "../../services/api-calls"
import { getDetails } from "../../services/api-calls"
import FilmList from "../../Components/FilmsList/FilmsList"
import { getResourceDetails } from "../../services/api-calls"
import PilotStarshipList from "../../Components/StarshipList/StarshipList"


const PersonDetails = () => {
  // const location = useLocation()
  const [films, setFilms] = useState([])
  const [starships, setStarships] = useState([])
  // const filmUrls = location.state.person.films
  const [homeWorld, setHomeWorld] = useState()
  const [personDetails, setPersonDetails] = useState({})
  const { personId } = useParams()

  useEffect(() => {
    const fetchPersonData = async()=>{
      const personData = await getResourceDetails("people", personId)
      setPersonDetails(personData)

    }
    fetchPersonData()
  }, [personId]);

  useEffect(() =>{
    const fetchFilmData = async() => {
      const filmData = await getRelatedObjects(personDetails.films)
      setFilms(filmData)
    }
    if (personDetails.films?.length>0)
    fetchFilmData()
  },[personDetails.films])

  useEffect(() =>{
    const fetchStarshipData = async() => {
      const starshipData = await getRelatedObjects(personDetails.starships)
      setStarships(starshipData)
    }
    if (personDetails.starships?.length>0)
    fetchStarshipData()
  },[personDetails.starships])

  useEffect(() => {
    const fetchHomeWorld = async() =>{
      const homeWorldData = await getDetails(personDetails.homeworld)
      setHomeWorld(homeWorldData)
    }
    if(!!personDetails.homeworld)fetchHomeWorld()
  }, [personDetails.homeworld]);

  return (  
    <div className="container-centered">
      <div className="card card-big">
        <h2>{personDetails.name}</h2>
        <h4>GENDER: {personDetails.gender}</h4>
        <h4>HEIGHT: {personDetails.height} CM</h4>
        <h4>MASS: {personDetails.mass} KG</h4>
        <h4>HOMEWORLD:</h4> 
        {
          (!homeWorld)? <p></p>:<p>{homeWorld.name}</p>     
        }
        <FilmList
          films = {films}
        />
        <PilotStarshipList
          starships = {starships}
        />
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