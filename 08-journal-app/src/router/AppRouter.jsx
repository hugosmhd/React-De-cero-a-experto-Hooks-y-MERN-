import { useSelector } from 'react-redux';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hooks';



const ProtectedRoute = ({ children }) => {
    const { status } = useSelector(state => state.auth);

    if (status === 'checking') {
        return <CheckingAuth />;
    }

    return (status === 'authenticated') ? children : <Navigate to="/auth/login" />;
};

const AuthenticatedRoute = ({ children }) => {
    const { status } = useSelector(state => state.auth);

    if (status === 'checking') {
        return <CheckingAuth />;
    }

    return (status === 'authenticated') ? <Navigate to="/" /> : children;
};

const router = createBrowserRouter([
    {
        // Login y registro
        path: "/auth/*",
        element: 
        <AuthenticatedRoute>
            <AuthRoutes />
        </AuthenticatedRoute>
    },
    {
        path: "/*",
        element:  
        <ProtectedRoute>
            <JournalRoutes />
        </ProtectedRoute>
    },
]);



export const AppRouter = () => {

    const { status } = useCheckAuth();

    if (status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
