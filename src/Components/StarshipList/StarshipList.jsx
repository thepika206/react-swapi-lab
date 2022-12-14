import { Link } from "react-router-dom";
const PilotStarshipList = (props) => {
  return (  
    <>
      <h3>Starship List</h3>
      {
        
        (props.starships.length===0) 
        ? <p>no ships</p> 
        : 
        props.starships.map(starship => 
          <Link
            to={`/starship/${starship.url.slice(37)}`}
            key = {starship.name}
          >
            <p>{starship.name}</p>
          </Link>
          
        )
        
        
      }
    </>
  );
}
 
export default PilotStarshipList;