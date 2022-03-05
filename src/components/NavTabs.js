import React from 'react';
import { Container, AppBar, Toolbar, Typography, } from '@mui/material';
import useStyles from '../styles';
const pages = ["Home", "Portfolio"];

const NavTabs = () => {
    const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar className={classes.navStyle} position="static">
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: {xs: 'none', md: 'flex'}}}>
                        Mandy Tsang
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

// function NavTabs({ currentPage, handlePageChange }) {
    
//     return (
//         <ul className="nav nav-tabs">
//             <li className="nav-item">
//                 <a 
//                 href="#home"
//                 onClick={() => handlePageChange('Home')}
//                 className={currentPage === 'Home' ? 'nav-link active': 'nav-link'}
//                 >
//                     Home
//                 </a>
//             </li>
//             <li className="nav-item">
//                 <a
//                 href="#portfolio"
//                 onClick={() => handlePageChange('Portfolio')}
//                 className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Portfolio
//                 </a>
//             </li>
//         </ul>
//     );
// }

export default NavTabs;

