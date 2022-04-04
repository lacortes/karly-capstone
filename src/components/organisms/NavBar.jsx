import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../../../assets/images/logo-2.png';

const NavBar = () => {
    const [ showDropdown, toggleDropdown ] = useState(false);
    const navigate = useNavigate();

    const handleDropdownClick = () => {
        toggleDropdown(old => !old);
    };
    
    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <>
            <nav className='navbar'>
                <div className='nav-logo-container nav-item'>
                    <img src={ Logo } alt='karly capstone logo' className='nav-logo' onClick={handleLogoClick}/>
                </div>
                <ul className='nav-links'>
                    <li className='nav-item'><Link to="/philosophy">Philosophy</Link></li>
                    <li className='nav-item'><Link to="/resume">Resume</Link></li>
                    <li className='nav-item'><Link to="/culmination-paper">Culmination Paper</Link></li>
                    <li className='nav-item' onClick={handleDropdownClick}>
                        Competencies
                        <FontAwesomeIcon className={`nav-caret ${ showDropdown === true ? 'down' : 'up' }`} icon={faCaretUp}/>
                        <ul className='nav-dropdown' hidden={showDropdown === true ? false : true}>
                            <li>
                                <Link to="/competencies/pse-foundations">
                                    <div>Personal, Spiritual, & Ethical Foundations</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/competencies/values-philosophy-history">
                                    <div>Values Philosophy, & History</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/competencies/assess-eval-research">
                                    <div>Assessment, Evaluation, & Research</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/competencies/law-policy-gov">
                                    <div>Law, Policy, & Governance</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/competencies/org-hr">
                                    <div>Organizational & Human Resources</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/competencies/leadership">
                                    <div>Leadership</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/competencies/social-justice-inclusion">
                                    <div>Social Justice & Inclusion</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/competencies/student-learning-dev">
                                    <div>Student Learning & Development</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/competencies/technology">
                                    <div>Technology</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/competencies/advising-and-support">
                                    <div>
                                        Advising & Suppoorting
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='nav-item'><Link to="/references">References</Link></li>
                    <li className='nav-item'><Link to="/acknowledgements">Acknowledgements</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;