import React from 'react';

const Spinner = ({ show=false }) => {
    return (
        <div className={`spinner ${ show === true ? 'show' : ''}`}>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    );
};

export default Spinner;