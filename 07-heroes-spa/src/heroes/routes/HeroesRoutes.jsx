import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Navbar } from '../../ui'
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../pages';
import { PrivateRoute } from '../../router/PrivateRoute';


export const HeroesRoutes = {
    element: <PrivateRoute>
        <Navbar /> 
    </PrivateRoute>,
    children: [
    {  path: "marvel",
        element: <MarvelPage />,
    },
    {
        path: "dc",
        element: <DCPage />,
    },
    {
        path: "search",
        element: <SearchPage />,
    },
    {
        path: "hero/:id",
        element: <HeroPage />,
    },
    {
        // path: "/*",
        path: "/",
        element: <Navigate to="/marvel" />,
    },
    ]
}