import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import StarshipList from './pages/StarshipList/StarshipList';
import PeopleList from './pages/PeopleList/PeopleList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
import PersonDetails from './pages/PersonDetails/PersonDetails';
import Home from './pages/Home';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path='/'
            element={<Home/>}
          />
          {/* <Route
            path='/home'
            element={<Home/>}
          /> */}
          <Route 
            path='/starships' 
            element={<StarshipList/>}
          />
          
          <Route 
            path='/starship' 
            element={<StarshipDetails/>}
          />
          <Route 
            path='/people' 
            element={<PeopleList/>}
          />
          <Route 
            path='/person' 
            element={<PersonDetails/>}
          />
        </Routes>
      </main>
    </> 
    
  )
}

export default App;
