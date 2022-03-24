import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.svg';
import Spinner from '../atoms/Spinner';
import Login from '../organisms/Login';
import RequestAccess from '../organisms/RequestAccess';


const UserEntry = () => {
    const [ isLoginSelected, setIsLoggedIn ] = useState(true); 
    const [ showSpinner, setShowSpinner ] = useState(false);

    return (
        <div className="user-entry-wrapper">
            <img src={ Logo } alt='Logo' className='logo'/>
            <div className="user-entry-container">
                <div className='foreground-drop'>
                    {
                        isLoginSelected  === true? <Login showSpinner={setShowSpinner} setIsLoggedIn={setIsLoggedIn}/> : <RequestAccess showSpinner={setShowSpinner} setIsLoggedIn={setIsLoggedIn}/>
                    }
                    <Spinner show={showSpinner}/>
                </div>
                <div className='background-drop'></div>
            </div>
        </div>
    );
};

export default UserEntry;