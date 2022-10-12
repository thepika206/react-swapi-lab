import { useEffect, useState } from "react"
import { getAllStarShips } from "../../services/api-calls"
import { Link } from "react-router-dom"



const AllShips = () => {
  const [starShips, setStarShips] = useState([])
  useEffect(() => {
    const fetchShipData = async() => {
      const starShipData = await getAllStarShips()
      setStarShips(starShipData.results)
    }
    fetchShipData()
  },[])

  return (  
    <>
      <h4>All Ships Component</h4>
      <div className="icon-container">
        {
          starShips.map(starShip => 
            <Link
              to="/ship"
              state={{starShip}}
            >
              <div className="icon-div">
                <h5>{starShip.name}</h5>
              </div>  
            </Link>
          )
        }
      </div>
    </>
  );
}

export default AllShips