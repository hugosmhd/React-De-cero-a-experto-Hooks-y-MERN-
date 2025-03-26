import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PublicRoute } from './PublicRoute';

const router = createBrowserRouter([
    {
      path: "login",
      element: <PublicRoute>
        <LoginPage />
      </PublicRoute>
    },
    // {
    //   path: "/*",
    //   element: {
    //     <PrivateRoute>

    //     </PrivateRoute>
    //   },
    // },
    HeroesRoutes,
    // {
    //   path: '/*',
    //   element: '/marvel'
    // }
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
