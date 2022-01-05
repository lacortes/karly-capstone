import React, { useContext } from 'react';
import axios from 'axios';
import jwt from '../../core/services/JwtService';

const baseUrl = 'http://localhost:5050/auth';

export const AuthContext = React.createContext(null);
export const useAuth = () => {
    return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {

    const signInUser = async (email='', pass='') => {
        try {
            const resp = await axios.post(baseUrl + '/login', { email, pass });

            const token = resp.data.token;
            jwt.setToken(token);
            console.log(token);

            return Promise.resolve();
        } catch (err) {
            const resp = err.toJSON();
            const status = resp.status;
            
            jwt.deleteToken();
            throw new Error(status);
        }  
    };

    const isAuthorized = async () => {
        try {
            await axios.get(baseUrl + '/is-authorized');
            
            return new Promise((resolve)=> {
                setTimeout(()=> resolve('good'), 3000);
            });
        } catch (err) {
            throw new Error(err);
        }
    };

    const isLoggedIn = () => {
        return jwt.getToken() !== null;
    };

    const value = { signInUser, isLoggedIn, isAuthorized };

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
