import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Header.css';
// import NavList from "../NavList"

const Header = () => {
  return (  
      <header className="App-header">
        <h1 id="title" >STAR WARS STARSHIPS</h1>
        <nav>
          <NavLink to="/starships" className='nav-item'>Starships</NavLink>
          <NavLink to="/people" className='nav-item'>People</NavLink>
        </nav>
      </header>
  )
}

export default Header
