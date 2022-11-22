import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (  
    <>
    <div className="App-header">
      <h1>STAR WARS STARSHIPS</h1>
      <nav>
        <NavLink to="/starships">Starships</NavLink>
        <NavLink to="/people">People TBD</NavLink>
      </nav>
    </div>
    </>
  )
}

export default Header
