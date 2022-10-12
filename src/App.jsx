import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import AllShips from './pages/AllShips/AllShips';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route 
            path='/AllShips' 
            element={<AllShips/>}
            >
          </Route>
        </Routes>
      </main>
    </> 
    
  )
}

export default App;
