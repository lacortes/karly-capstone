import React, { useState } from 'react';
import Button from '../atoms/Button';
import validator from 'validator';
import { useAuth } from '../util/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = ({ showSpinner }) => {
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ isBtnEnabled, setBtnEnabled ] = useState(false);
    const [ isEmailValid, setEmailValid ] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();

    const updateEmail = e => {
        const emailRaw = e.target.value.trim();
        if ( !validator.isEmpty(emailRaw) && validator.isEmail(emailRaw) ) {
            setEmailValid(true);
            
            if (!validator.isEmpty(pass)) {
                setBtnEnabled(true);
            }
            
        } else {
            setEmailValid(false);
            setBtnEnabled(false);
        }
        setEmail(emailRaw);
    };

    const updatePass = e => {
        const passRaw = e.target.value.trim();
        if ( validator.isEmpty(passRaw) === false && isEmailValid === true ) {
            setBtnEnabled(true);
        } else {
            setBtnEnabled(false);
        }
        setPass(passRaw);
    };

    const handleSignIn = () => {
        if (isBtnEnabled === false) {
            return; // no double click
        }

        setBtnEnabled(false);
        showSpinner(true);

        auth.signInUser(email, pass)
            .then(() => {
                navigate('/');
            }).catch(err => {
                console.log(err);
                
            }).finally(() => {
                showSpinner(false);
            });
    };

    return (
        <div className="login-wrapper">
            <h1>Login</h1>
            <form >
                <div>
                    <input type="email" placeholder="Email" value={email} onChange={updateEmail}/>    
                    <input type="password" placeholder="Password" value={pass} onChange={updatePass}/>
                </div>
                <Button className="entry-btn" label="Sign in" enabled={isBtnEnabled} onClick={handleSignIn}/>            
            </form>
        </div>
    );
};

export default Login;
