import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getRelatedObjects } from "../../services/api-calls"
import { getDetails } from "../../services/api-calls"
import FilmList from "../../Components/FilmsList/FilmsList"


const PersonDetails = () => {
  const location = useLocation()
  const [films, setFilms] = useState([])
  const filmUrls = location.state.person.films
  const [homeWorld, setHomeWorld] = useState()

  useEffect(() =>{
    const fetchFilmData = async() => {
      const filmData = await getRelatedObjects(filmUrls)
      setFilms(filmData)
    }
    fetchFilmData()
  },[filmUrls])

  useEffect(() => {
    const fetchHomeWorld = async() =>{
      const homeWorldData = await getDetails(location.state.person.homeworld)
      setHomeWorld(homeWorldData)
    }
    fetchHomeWorld()
  }, [location.state.person.homeworld]);

  return (  
    <div className="container-centered">
      <div className="card card-big">
        <h2>Personal File</h2>
        <h4>NAME: {location.state.person.name}</h4>
        <h4>GENDER: {location.state.person.gender}</h4>
        <h4>HEIGHT: {location.state.person.height} CM</h4>
        <h4>MASS: {location.state.person.mass} KG</h4>
        <h4>HOMEWORLD:</h4> 
        {
          (!homeWorld)? <p></p>:<p>{homeWorld.name}</p>     
        }
        <FilmList
          films = {films}
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