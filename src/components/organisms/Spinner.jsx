import React from 'react';

import Spinner from '../atoms/Spinner';

const LoadingScreen = ({ show }) => {
    return (
        <div className='loading-screen'>
            <div className='overlay'></div>
            <Spinner show={ show }/>
        </div>
    );
};

export default LoadingScreen;