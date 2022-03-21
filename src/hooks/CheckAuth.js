import { useState, useEffect } from 'react';
import { useAuth } from '../components/util/AuthProvider';

function useCheckAuth() {
    const auth = useAuth();
    const [ isLoggedIn, setLoggedIn ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        if (auth.isLoggedIn() === false) {
            auth.refreshToken()
                .then(() => setLoggedIn(true))
                .catch(() => setLoggedIn(false))
                .finally(() => setIsLoading(false));
        } else {
            auth.isAuthorized()
                .then(() => { 
                    setLoggedIn(true);
                })
                .catch(() => {
                    setLoggedIn(false);
                })
                .finally(() => setIsLoading(false));
        }
    }, [ auth ]);
    return { isLoggedIn, isLoading };
}

export default useCheckAuth;