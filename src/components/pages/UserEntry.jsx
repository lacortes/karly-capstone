import React from 'react';
import Logo from '../../../assets/images/logo.svg';
import Login from '../organisms/Login';


const UserEntry = () => {
    return (
        <div className="user-entry-wrapper">
            <img src={ Logo } alt='Logo' className='logo'/>
            <div className="user-entry-container">
                <div className='foreground-drop'>
                    <Login showSpinner={false}/> 
                </div>
                <div className='background-drop'></div>
                {/* <div className="user-entry-content">
                    {isLogin ? <Login showSpinner={setShowSpinner}/> : <RequestAccess showSpinner={setShowSpinner}/> }
                </div>
                <Spinner show={showSpinner}/> */}
            </div>
        </div>
    );
};

export default UserEntry;