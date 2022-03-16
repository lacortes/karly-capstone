import React, { useContext } from 'react';
import { signInUser, isAuthorized, isLoggedIn, refresh as refreshToken, isAdmin } from '../../core/services/AuthService';

export const AuthContext = React.createContext(null);
export const useAuth = () => {
    return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {

    return (
        <AuthContext.Provider value={{ 
            signInUser, isLoggedIn, isAuthorized, refreshToken, isAdmin 
        }}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
