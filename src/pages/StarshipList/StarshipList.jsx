import { useEffect, useState } from "react"
import { getStarships } from "../../services/api-calls"
import { Link } from "react-router-dom"



const StarshipList = () => {
  const [starships, setStarships] = useState([])
  useEffect(() => {
    const fetchStarshipData = async() => {
      const starshipData = await getStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipData()
  },[])

  return (  
    <>
      <div className="container">
        {
          starships.map(starship => 
            <Link
              to="/starship"
              state={{starship: starship}}
              key={starship.name}
            >
              <div className="card">
                <h3>{starship.name}</h3>
              </div>  
            </Link>
          )
        }
      </div>
    </>
  );
}

export default StarshipList