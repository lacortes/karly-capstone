import React, { useState } from 'react';
import Button from '../atoms/Button';
import validator from 'validator';
import { useAuth } from '../util/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

const Login = ({ showSpinner, setIsLoggedIn  }) => {
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ isBtnEnabled, setBtnEnabled ] = useState(false);
    const [ isEmailValid, setEmailValid ] = useState(false);
    const [ isMakingRequest, setMakingRequest ] = useState(false);
    const [ respMsg, setRespMsg ] = useState({ msg: '', isError: false });

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
        if (isBtnEnabled === false || isMakingRequest === true) {
            return; // no double click
        }

        setBtnEnabled(false);
        showSpinner(true);
        setMakingRequest(true);

        auth.signInUser(email, pass)
            .then(() => {
                navigate('/');
            }).catch(msg => {
                setRespMsg({
                    msg,
                    isError: true
                });
            }).finally(() => {
                showSpinner(false);
                setMakingRequest(false);
            });
    };
    
    const handleRequestAccess = () =>  {
        if (isMakingRequest === true) {
            return;
        }

        setIsLoggedIn(false);
    };

    const onSubmit = e => {
        e.preventDefault();
        handleSignIn();
    };
    
    return (
        <div className="login-wrapper">
            <h1>Login</h1>
            
            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                <div className="input-with-icon">
                    <FontAwesomeIcon className="input-icon" icon={faEnvelope}/>
                    <input type="text" placeholder="Email" value={email} onChange={updateEmail}/>
                </div>
                <div className="input-with-icon">
                    <FontAwesomeIcon className='input-icon' icon={faKey}/>
                    <input type="password" placeholder="Password" value={pass} onChange={updatePass}/>
                </div>
                <Button className="entry-btn filled" label="Sign in" enabled={isBtnEnabled} />
                <Button className="entry-request-access-btn outlined" label="Request Access" enabled={true} propogate={false} onClick={handleRequestAccess}/>            
            </form>
            <div className={ `response-msg ${ respMsg.isError === true ? 'error-msg' : ''}` }>
                {respMsg.msg}
            </div>
        </div>
    );
};

export default Login;
