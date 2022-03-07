import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [anchorElNav, setAnchorElNav] = useState('Home');

    const renderPage = () => {
        if (anchorElNav === 'Portfolio'){
            return (
                <div>
                    <Portfolio />
                    <Footer />
                </div>
            );
        } else if (anchorElNav === 'Contact'){
            return (
                <div>
                    <Contact />
                   
                </div>
            );
        }
        return (
            <div>
                <Home />
                <Footer />
            </div>
        );
    };

    const handlePageChange = (page) => setAnchorElNav(page);

    return (
        <div>
            <NavTabs anchorElNav = {anchorElNav} handlePageChange = {handlePageChange} />
            {renderPage()}
        </div>
        
    );
}