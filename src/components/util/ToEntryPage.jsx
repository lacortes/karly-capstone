import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useCheckAuth from '../../hooks/CheckAuth';
import LoadingScreen from '../organisms/Spinner';

const ToEntryPage = ({ children }) => {

    const location = useLocation();
    const authStatus = useCheckAuth();

    return (
        ( 
            authStatus.isLoading === true ? <LoadingScreen show={authStatus.isLoading} /> 
                : authStatus.isLoggedIn === true ? <Navigate to="/" state={{ from: location }} />
                    : children
        )
    );
};

export default ToEntryPage;