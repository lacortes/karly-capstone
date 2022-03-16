import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import LoadingScreen from '../organisms/Spinner';

const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();
    const [ isLoggedIn, setLoggedIn ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        if (auth.isLoggedIn() === false) {
            auth.refreshToken()
                .then(() => setLoggedIn(true))
                .catch(() => setLoggedIn(false))
                .finally(() => setIsLoading(false))
            ;
            return;
        }
        
        auth.isAuthorized()
            .then(() => { 
                setLoggedIn(true);
            })
            .catch(() => {
                setLoggedIn(false);
            })
            .finally(() => setIsLoading(false))
        ;
    }, [ auth ]);

    return (
        ( 
            isLoading === true ? <LoadingScreen show={isLoading} /> 
                : isLoggedIn === true ? children 
                    : <Navigate to="/login" state={{ from: location }} />
        )
    );
};

export default RequireAuth;