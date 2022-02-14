import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

function AdminRoute({ children }) {
    const { validUser, isLoading, setIsLoading, isLoggedIn, getUserRole } = useAuth();
    const [role, setRole] = useState('');

    useEffect(() => {
        isLoggedIn();
    }, []);

    useEffect(() => {
        setIsLoading(true);
        getUserRole()
        .then(res => {            
            setRole(res.data.role);
            setIsLoading(false);
        });
    }, [validUser])

    if (isLoading) {
        return "Loading"
    }
    else {     
        if(validUser === true && role === 'admin'){
           
            return children;
        }
        else{
            return <Navigate to="/dashboard/home" />
        }      
    }
}

export default AdminRoute;