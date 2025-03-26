import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';


const ProtectedRoute = ({ children }) => {

    const { status } = useAuthStore();
    

    // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

    return (status === 'authenticated') ? children : <Navigate to="/auth/login" />;
};

const AuthenticatedRoute = ({ children }) => {
    // const { status } = useSelector(state => state.auth);

    // if (status === 'checking') {
    //     return <CheckingAuth />;
    // }

    const { status } = useAuthStore();

    // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

    return (status === 'authenticated') ? <Navigate to="/" /> : children;
};

const router = createBrowserRouter([
    {
        // Login y registro
        path: "/auth/*",
        element: 
        <AuthenticatedRoute>
            <LoginPage />
        </AuthenticatedRoute>
    },
    {
        // Login y registro
        path: "/*",
        element: 
        <ProtectedRoute>
            <CalendarPage />
        </ProtectedRoute>
    },
    // {
    //     path: "/*",
    //     element:  
    //     // <ProtectedRoute>
    //         <JournalRoutes />
    //     // </ProtectedRoute>
    // },
]);

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])

    if (status === 'checking') {
        return (
            <h3>Cargando...</h3>
        )
    }

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
