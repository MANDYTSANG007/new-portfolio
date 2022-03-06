import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

export default function PortfolioContainer() {
    const [anchorElNav, setAnchorElNav] = useState('Home');

    const renderPage = () => {
        if (anchorElNav === 'Portfolio'){
            return <Portfolio />;
        }
        return <Home />;
    };

    const handlePageChange = (page) => setAnchorElNav(page);

    return (
        <div>
            <NavTabs anchorElNav = {anchorElNav} handlePageChange = {handlePageChange} />
            {renderPage()}
        </div>
    );
}