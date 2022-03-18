import React, { useState, useEffect } from 'react';
import { useAuth } from '../util/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import useCheckAuth from '../../hooks/CheckAuth';
import LoadingScreen from '../organisms/Spinner';


// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [ search ]);
}

const MagicLink = () => {
    const [ showSpinner, setShowSpinner ] = useState(true);
    const authStatus = useCheckAuth();
    const auth = useAuth();
    const navigate = useNavigate();
    const query = useQuery();
    useEffect(() => {
        if (authStatus.isLoggedIn) {
            navigate('/');
        } else {
            auth.magicLinkSignIn(new String(query.get('link')))
                .then(() => {
                    navigate('/');
                }).catch(err => {
                    console.error(err);
                    navigate('/login');
                }).finally(() => {
                    setShowSpinner(false);
                });
        }
    }, [ auth, authStatus, navigate, query ]);

    return (
        <LoadingScreen show={showSpinner}/>
    );
};

export default MagicLink;