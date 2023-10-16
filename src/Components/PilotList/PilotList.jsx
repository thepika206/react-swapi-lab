import { Link } from "react-router-dom";
const PilotList = (props) => {
  return (
    <>
      <h3>Pilot List</h3>
      {

        (props.pilots.length === 0)
          ? <p>no pilots</p>
          :
          props.pilots.map(pilot =>
            <Link
              to={`/people/${pilot.url.slice(34)}`}
              key={pilot.name}
            >
              <p>{pilot.name}</p>
            </Link>
          )


      }
    </>
  )
}

export default PilotList;
