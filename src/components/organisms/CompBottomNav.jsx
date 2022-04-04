import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';


const CompBottomNav = ({ prev='', next='' }) => {
    const navigate = useNavigate();

    return (
        <div className='competencies-bottom-nav'>
            <Button enabled={ prev !== '' } onClick={() => navigate(prev)}>
                <FontAwesomeIcon icon={faAnglesLeft}/>
            </Button>
            <Button enabled={ next !== '' } onClick={() => navigate(next)}>
                <FontAwesomeIcon icon={faAnglesRight}/>
            </Button>
        </div>
    );
};

export default CompBottomNav;