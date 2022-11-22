import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import NavList from "../NavList"

const Header = () => {
  return (  
    <>
    <div className="App-header">
      <h1>STAR WARS STARSHIPS</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/starships">Starships</NavLink>
          </li>
          <li>
            <NavLink to="/people">People</NavLink>
          </li>
        </ul>
        
      </nav>
    </div>
    </>
  )
}

export default Header
