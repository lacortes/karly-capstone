import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate  } from 'react-router-dom';
import { useAuth } from '../util/AuthProvider';
import LoadingScreen from '../organisms/Spinner';

const Admin = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [ isLoading, setLoading ] = useState(true);
    const [ isAuthorized, setIsAuthorized ] = useState(false);
    
    useEffect(() => {
        auth.isAdmin()
            .then(() => setIsAuthorized(true))
            .catch(() => setIsAuthorized(false))
            .finally(() => setLoading(false))
        ;
    }, [ auth, navigate ]);

    return (
        (
            isLoading === true ? <LoadingScreen show={isLoading} />
                : isAuthorized === true ? <p>Admin</p> 
                    : <Navigate to="/" />
        )
    );
};

export default Admin;