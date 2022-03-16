import axios from 'axios';
import { API_ROOT } from '../config/environment';
import jwt from './JwtService';

const baseUrl = `${ API_ROOT }/auth`;
let timeoutID;

const loggedInUser = (() => {
    let admin = null;

    const setAdmin = bool => admin = bool;
    const isAdmin = () => admin;

    return Object.freeze({ setAdmin, isAdmin });
})();


const signInUser = async (email='', pass='') => {
    try {
        const resp = await axios.post(baseUrl + '/login', { email, pass }, { withCredentials: true });

        setTokenFromResponse(resp);
        return Promise.resolve();
    } catch (err) {
        let msg = '';
        if (err.response) {
            const resp = err.response;
            msg = resp.data.message;
        } else {
            msg = 'Server error!';                
        }

        jwt.deleteToken();
        return Promise.reject(msg);
    }  
};

const isAdmin = async () => {
    if (loggedInUser.isAdmin() === null) {
        
        try {
            const { isAdmin } = await isAuthorized();
            loggedInUser.setAdmin(isAdmin === true);
        } catch (err) {
            loggedInUser.setAdmin(false);
        }
        
    }
    return loggedInUser.isAdmin();
};

const isAuthorized = async () => {
    let resp;
    try {
        resp = await axios.get(
            baseUrl + '/is-authorized', 
            { 
                withCredentials: true, 
                headers: { Authorization: `Bearer ${ jwt.getToken() }` } 
            } 
        );
    } catch (err) {
        return Promise.reject(err);
    }
    return Promise.resolve(resp.data);
};

const isLoggedIn = () => {
    return jwt.getToken() !== null;
};

const backgroundRefresh = expiry => {
    if (!expiry) {
        console.error('Unable to perform token refresh');
        return;
    }

    const delay = new Date(expiry).getTime() - new Date().getTime();
    // Fire 10 seconds before JWT expires
    const timeoutTrigger = delay - 10000;

    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
        refreshToken()
            .then(resp => setTokenFromResponse(resp))
            .catch(console.error)
        ;
    }, timeoutTrigger);
};

const setTokenFromResponse = resp => {
    const { access_token, expiry } = resp.data;
    jwt.setToken(access_token);  
    backgroundRefresh(expiry);
};

const refreshToken = async () => {
    let resp;
    try {
        resp = await axios.get(baseUrl + '/refresh-token', { withCredentials: true });
    } catch (err) {
        return Promise.reject(err);
    }
    return Promise.resolve(resp);
};

const refresh = async () => {
    try {
        const resp = await refreshToken();
        setTokenFromResponse( resp );
        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
};

export {
    signInUser,
    isAuthorized,
    isLoggedIn, 
    refresh, 
    isAdmin
};