const PilotList = (props) => {
  return (  
    <>
        <h3>Pilot List</h3>
      {
        
        (props.pilots.length===0) 
        ? <p>no pilots</p> 
        : 
        props.pilots.map(pilot => <p>{pilot.name}</p>)
        
        
      }
    </>
  )
}
 
export default PilotList;