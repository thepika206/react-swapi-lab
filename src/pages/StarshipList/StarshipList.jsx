import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { getStarships } from "../../services/api-calls"



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
      {!starships.length ? <p>A long time ago in a galaxy far away....</p> : <></> }
      <div className="container">
          <>
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
          </>
      </div>
    </>
  );
}

export default StarshipList