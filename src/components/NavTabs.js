import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a 
                href="#home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active': 'nav-link'}
                >
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
        </ul>
    );
}

export default NavTabs;

