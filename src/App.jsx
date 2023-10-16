import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StarshipList from './pages/StarshipList/StarshipList';
import PeopleList from './pages/PeopleList/PeopleList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
import PersonDetails from './pages/PersonDetails/PersonDetails';
import Home from './pages/Home/Home';
import PageNotFound from './pages/Error/PageNotFound';
import RootLayout from './Layouts/RootLayout';


function App() {
    const router = createBrowserRouter([{
        path: '/',
        element: <RootLayout />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'starships',
                element: <StarshipList />
            },
            {
                path: 'starships/:starshipId',
                element: <StarshipDetails />
            },
            {
                path: 'people',
                element: <PeopleList />
            },
            {
                path: 'people/:personId',
                element: <PersonDetails />
            },
        ]
    }])


    return (
        <>
            <RouterProvider router={router} />
        </>

    )
}

export default App;


