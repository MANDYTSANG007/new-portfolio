import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Portfolio'){
            return <Portfolio />;
        }
        return <Home />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage = {currentPage} handlePageChange = {handlePageChange} />
            {renderPage()}
        </div>
    );
}