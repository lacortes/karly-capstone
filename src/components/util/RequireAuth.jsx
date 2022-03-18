import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useCheckAuth from '../../hooks/CheckAuth';
import LoadingScreen from '../organisms/Spinner';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const authStatus = useCheckAuth();

    return (
        ( 
            authStatus.isLoading === true ? <LoadingScreen show={authStatus.isLoading} /> 
                : authStatus.isLoggedIn === true ? children 
                    : <Navigate to="/login" state={{ from: location }} />
        )
    );
};

export default RequireAuth;