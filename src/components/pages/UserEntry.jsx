import React, { useState } from 'react';
import Button from '../atoms/Button';
import Login from '../organisms/Login';
import RequestAccess from '../organisms/RequestAccess';
import Spinner from '../atoms/Spinner';

const UserEntry = () => {
    const [ isLogin, setIsLogin ] = useState(true);
    const [ showSpinner, setShowSpinner ] = useState(false);

    const toggleButtons = e => {
        if (e.target.classList.contains('active')) {
            return;
        }

        setIsLogin(prev => !prev);
    };

    return (
        <div className="user-entry-wrapper">
            <div className="user-entry-container">
                <div className="buttons-container">
                    <div className="button-wrapper">
                        <Button className={isLogin ? 'active' : ''} label="Login" onClick={toggleButtons}/> 
                    </div>
                    <div className="button-wrapper">
                        <Button className={isLogin ? '' : 'active'} label="Request Access" onClick={toggleButtons}/>
                    </div>                
                </div>
                <div className="user-entry-content">
                    {isLogin ? <Login showSpinner={setShowSpinner}/> : <RequestAccess /> }
                </div>
                <Spinner show={showSpinner}/>
            </div>
        </div>
    );
};

export default UserEntry;