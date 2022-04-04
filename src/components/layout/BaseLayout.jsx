import React from 'react';
import NavBar from '../organisms/NavBar';

const BaseLayout = ({ children }) => {
    return (
        <div className="base-container-wrapper">
            <div className="base-nav-wrapper">
                <NavBar />
            </div>
            <div className="base-container">
                { children }
            </div>
        </div>
    );
};

export default BaseLayout;
