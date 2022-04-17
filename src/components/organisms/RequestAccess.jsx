import React, { useState, useEffect } from 'react';
import Button from '../atoms/Button';
import axios from 'axios';
import { API_ROOT } from '../../core/config/environment';
import validator from 'validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';


const RequestAccess = ({ showSpinner, setIsLoggedIn }) => {
    const [ email, setEmail ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ btnEnabled, setBtnEnabled ] = useState(false);
    const [ isMakingRequest, setMakingRequest ] = useState(false);
    const [ respMsg, setRespMsg ] = useState({ msg: '', isError: false });

    const [ isFirstNameValid, setFirstNameValid ] = useState(false);
    const [ isLastNameValid, setLastNameValid ] = useState(false);
    const [ isEmailValid, setEmailValid ] = useState(false);

    useEffect(
        () => setBtnEnabled( isFirstNameValid && isLastNameValid && isEmailValid ), 
        [ isFirstNameValid, isLastNameValid, isEmailValid ]
    );

    const handleRequestAccess = () => {
        if (btnEnabled === false || isMakingRequest === true) {
            return;
        }

        setMakingRequest(true);
        setBtnEnabled(false);
        showSpinner(true);
        axios.post(API_ROOT + '/api/request-access', { email, first_name: firstName, last_name: lastName })
            .then(resp => {
                setRespMsg({
                    msg: resp.data.message,
                    isError: false
                });
            })
            .catch(err => {
                
                let msg = '';
                if (err.response) {
                    const resp = err.response;
                    msg = resp.data.message;
                } else {
                    msg = 'Server error!';
                }

                setRespMsg({
                    msg,
                    isError: true
                });
                
            })
            .finally(() => {
                setMakingRequest(false);
                showSpinner(false);
            })
        ;
    };

    const updateField = ( value, setField, setValid, checkValid ) => {
        const rawValue = value.trim();

        setField(rawValue);
        setValid(validator.isEmpty(rawValue) === false && checkValid(rawValue));
    };

    const updateFirstName = e => {
        updateField(e.target.value, setFirstName, setFirstNameValid, validator.isAlpha);
    };

    const updateLastName = e => {
        updateField(e.target.value, setLastName, setLastNameValid, validator.isAlpha);
    };

    const updateEmail = e => {
        updateField(e.target.value, setEmail, setEmailValid, validator.isEmail);
    };
 
    const handleSignIn = () => {
        if (isMakingRequest === true) {
            return;
        }

        setIsLoggedIn(true);
    };

    const onSubmit = e => {
        e.preventDefault();
        handleRequestAccess();
    };

    return (
        <>
            <div className="request-access-wrapper"> 
                <h1>Request Access</h1>

                <form noValidate autoComplete="off" onSubmit={onSubmit}>
                    <div className="input-with-icon">
                        <FontAwesomeIcon className="input-icon" icon={faUser}/>
                        <input type="text" placeholder="First Name" value={firstName} onChange={updateFirstName} required/>
                    </div>
                    <div className="input-with-icon">
                        <FontAwesomeIcon className="input-icon" icon={faUser}/>
                        <input type="text" placeholder="Last Name" value={lastName} onChange={updateLastName} required/>
                    </div>
                    <div className="input-with-icon">
                        <FontAwesomeIcon className="input-icon" icon={faEnvelope}/>
                        <input type="text" placeholder="Email" value={email} onChange={updateEmail} required/>
                    </div>
    
                    <Button className="entry-btn filled" id="requestAccessBtn"  label={'Request Access'} enabled={btnEnabled} />
                    <Button className="entry-request-access-btn outlined" label="Sign In" enabled={true} propogate={false} onClick={handleSignIn}/>
                    <div className={ `response-msg ${ respMsg.isError === true ? 'error-msg' : ''}` }>
                        {respMsg.msg}

                        {respMsg.msg && respMsg.isError === false ?
                            <span className='tool-tip' data-text="If email is not sent to inbox, check spam/junk folder.
                                Organizations may filter out any external email.">
                                <FontAwesomeIcon className="tool-tip-icon" icon={faExclamationCircle} />
                            </span>
                            : null
                        }
                        
                    </div>
                </form>
            </div>
        </>
    );
};

export default RequestAccess;
