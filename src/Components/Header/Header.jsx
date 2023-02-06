// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (  
      <header className="App-header">
        <h1 id="title" >STAR WARS FAN PAGE</h1>
        <nav>
          <NavLink id='home-nav-item' end to="/" className='nav-item'>Home</NavLink>
          <NavLink id='starships-nav-item' to="/starships" className='nav-item'>Starships</NavLink>
          <NavLink id='people-nav-item' to="/people" className='nav-item'>People</NavLink>
        </nav>
      </header>
  )
}

export default Header
