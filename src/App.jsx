import './App.css';
import Header from './Components/Header/Header';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import StarshipList from './pages/StarshipList/StarshipList';
import PeopleList from './pages/PeopleList/PeopleList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
import PersonDetails from './pages/PersonDetails/PersonDetails';
import Home from './pages/Home/Home';
// import { Link } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />
    }
  ])


  return (
    <>
      <RouterProvider router={router}/>
    </>

  )
}



// <Header />
//       <main>
//         <Routes>
//           <Route
//             path='/'
//             element={<Home/>}
//           />
//           {/* <Route
//             path='/home'
//             element={<Home/>}
//           /> */}
//           <Route 
//             path='/starships' 
//             element={<StarshipList/>}
//           />

//           <Route 
//             path='/starships/:starshipId' 
//             element={<StarshipDetails/>}
//           />
//           <Route 
//             path='/people' 
//             element={<PeopleList/>}
//           />
//           <Route 
//             path='/people/:personId' 
//             element={<PersonDetails/>}
//           />
//         </Routes>
//       </main>

export default App;


