import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import StarshipList from './pages/StarshipList/StarshipList';
import PeopleList from './pages/PeopleList/PeopleList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
import PersonDetails from './pages/PersonDetails/PersonDetails';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route 
            path='/starships' 
            element={<StarshipList/>}
            >
          </Route>
          <Route 
            path='/starship' 
            element={<StarshipDetails/>}
            >
          </Route>
          <Route 
            path='/people' 
            element={<PeopleList/>}
            >
          </Route>
          <Route 
            path='/person' 
            element={<PersonDetails/>}
            >
          </Route>
        </Routes>
      </main>
    </> 
    
  )
}

export default App;
