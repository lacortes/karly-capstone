import React from 'react';

const Spinner = ({ show=false }) => {
    return (
        <div className={`spinner ${ show === true ? 'show' : ''}`}>
            <div className="ball bounce1"></div>
            <div className="ball bounce2"></div>
            <div className="ball bounce3"></div>
        </div>
    );
};

export default Spinner;