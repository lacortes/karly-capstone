import React, { useState } from 'react';
import Button from '../atoms/Button';
import validator from 'validator';
import axios from 'axios';

const baseUrl = 'http://localhost:5050/api';

const RequestAccess = () => {
    const [ email, setEmail ] = useState('');
    const [ tmpPass, setTmpPass ] = useState('');
    const [ btnEnabled, setBtnEnabled ] = useState(false);

    const handleRequestAccess = () => {
        axios.post(baseUrl + '/request-access', { email })
            .then(resp => {
                setTmpPass(resp.data.pass);
            })
            .catch(e => console.log(e))
        ;
    };

    const updateEmail = e => {
        const emailRaw = e.target.value.trim();
        if ( !validator.isEmpty(emailRaw) && validator.isEmail(emailRaw) ) {
            setBtnEnabled(true);
        } else {
            setBtnEnabled(false);
        }
        setEmail(emailRaw);
    };

    return (
        <>
            <div className="request-access-wrapper">
                <input 
                    id="requestAccessEmail" 
                    type="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={updateEmail}
                />
                <Button className="entry-btn" id="requestAccessBtn"  label={'Request Access'} enabled={btnEnabled} onClick={handleRequestAccess}/>
                
                <label htmlFor="tmpPassword">Password: </label>
                <input 
                    id="tmpPassword" 
                    type="text" 
                    readOnly
                    value={tmpPass}
                />
            </div>
        </>
    );
};

export default RequestAccess;
