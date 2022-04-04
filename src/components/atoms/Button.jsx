import React from 'react';

const Button = ({ children, id='', label='', className='', enabled=true, propogate=true, onClick=()=>{} }) => {
    return (
        <button
            id={id}
            className={className}
            onClick={e => {
                if (enabled === false) {
                    e.stopPropagation();
                    console.log('cannot click');
                    return;
                }

                if (propogate === false) {
                    e.stopPropagation();
                }

                onClick(e);
            }}
            disabled={enabled === true ? false : true}
        >
            {label}
            {children}
        </button>
    );
};

export default Button;
