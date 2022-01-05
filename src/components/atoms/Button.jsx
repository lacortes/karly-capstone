import React from 'react';

const Button = ({ id='', label='', className='', enabled=true, onClick=()=>{} }) => {
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
                onClick(e);
            }}
            disabled={enabled === true ? false : true}
        >
            {label}
        </button>
    );
};

export default Button;
