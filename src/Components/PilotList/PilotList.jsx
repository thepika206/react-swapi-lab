const PilotList = (props) => {
  return (  
    <>
        <h3>Pilot List</h3>
      {
        
        (props.pilots.length===0) 
        ? <p>no pilots</p> 
        : 
        props.pilots.map(pilot => 
          <a href={`/people/${pilot.url.slice(34)}`}
            key = {pilot.name}
          >
            <p
              
            >{pilot.name}</p>
          </a>
        )
        
        
      }
    </>
  )
}
 
export default PilotList;