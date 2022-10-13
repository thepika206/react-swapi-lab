import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route 
            path='/' 
            element={<StarshipList/>}
            >
          </Route>
          <Route 
            path='/starship' 
            element={<StarshipDetails/>}
            >
          </Route>
        </Routes>
      </main>
    </> 
    
  )
}

export default App;
