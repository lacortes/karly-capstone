import React, { useState, useEffect } from 'react';
import Button from '../atoms/Button';
import validator from 'validator';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { API_ROOT } from '../../core/config/environment';

const RequestAccess = ({ showSpinner }) => {
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

    return (
        <>
            <div className="request-access-wrapper"> 

                <div className='lock-icon-wrapper'>
                    <FontAwesomeIcon className='lock-icon' icon={faKey}/>
                </div>

                <div className="input-field">
                    <input 
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={updateFirstName}
                        required
                    />
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-field">
                    <input 
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={updateLastName}
                        required
                    />
                    <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="input-field">
                    <input 
                        id="requestAccessEmail" 
                        type="email" 
                        value={email}
                        onChange={updateEmail}
                        required
                    />
                    <label htmlFor="requestAccessEmail">Email</label>
                </div>
                <Button className="entry-btn" id="requestAccessBtn"  label={'Request Access'} enabled={btnEnabled} onClick={handleRequestAccess}/>
                
                <div className={ `response-msg ${ respMsg.isError === true ? 'error-msg' : ''}` }>
                    {respMsg.msg}
                </div>

            </div>
        </>
    );
};

export default RequestAccess;
