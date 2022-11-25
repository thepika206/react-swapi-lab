// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (  
      <header className="App-header">
        <h1 id="title" >STAR WARS FAN PAGE</h1>
        <nav>
          <NavLink end to="/" className='nav-item'>Home</NavLink>
          <NavLink to="/starships" className='nav-item'>Starships</NavLink>
          <NavLink to="/people" className='nav-item'>People</NavLink>
        </nav>
      </header>
  )
}

export default Header
