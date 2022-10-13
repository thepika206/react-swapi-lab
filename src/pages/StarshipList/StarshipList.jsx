import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { getStarships } from "../../services/api-calls"



const StarshipList = () => {
  const [starships, setStarships] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [shipData, setShipData] = useState({})

  useEffect(() => {
    const fetchStarshipData = async(i) => {
      const shipData = await getStarships(pageNumber)
      setShipData(shipData)
      setStarships(shipData.results)
    }
    fetchStarshipData()
  },[pageNumber])

  const handlePrevButton = () => {
    if(pageNumber > 1)
    setPageNumber(pageNumber - 1)
  }
  const handleNextButton = () => {
    if(pageNumber < Math.ceil(shipData.count/10))
    setPageNumber(pageNumber + 1)
  }
  
  return (  
    <>
      {!starships.length ? <p>A long time ago in a galaxy far away....</p> 
      : 
      <>
      <div className="nav-buttons">
        <button onClick={handlePrevButton} >Prev</button>
        <button onClick={handleNextButton} >Next</button>
      </div>
      <div className="nav-buttons">
        <p>Page: {pageNumber} of {Math.ceil(shipData.count/10)}</p>
      </div>
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
      }
    </>
  )
}

export default StarshipList