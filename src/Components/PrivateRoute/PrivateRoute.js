import React, { useEffect } from 'react';
import { Navigate, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

function PrivateRoute({ children }) {
    const { validUser, isLoading, isLoggedIn } = useAuth();
    useEffect(() => {
        isLoggedIn();
    }, []);

    if (isLoading) {
        return "Loading"
    }
    else {
        return validUser ? children : <Navigate to="/" />;
    }

}

export default PrivateRoute;