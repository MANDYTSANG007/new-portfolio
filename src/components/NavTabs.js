import React from 'react';
import { Container, AppBar, Toolbar, Typography, IconButton, Box, Menu, MenuItem, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from '../styles';

// import { HOME_PATH, PORTFOLIO_PATH, CONTACT_PATH} from '../paths';


const pages = [
    {
        pageTitle: "About Me",
        pageURL: "/Home",
    }, 
    {
        pageTitle: "Portfolio",
        pageURL: "/Portfolio",
    },
    {
        pageTitle: "Contact",
        pageURL: "/Contact",
    }, 
];

const NavTabs = (props) => {
    // props.handlePageChange is a function

    const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }
    const handleCloseNavMenu = (pageURL) => {
        setAnchorElNav(null);
        if (pageURL)
            props.handlePageChange(pageURL);
    }

    return (
        <AppBar className={classes.navStyle} position="static">
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: {xs: 'none', md: 'flex'}}}>
                        Mandy Tsang
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={() => {
                                handleCloseNavMenu(null);
                            }}
                        sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                        {pages.map((page, index)=> {
                            const { pageTitle, pageURL} = page;
                            return (
                            <MenuItem key={index} onClick={()=> {
                                handleCloseNavMenu(pageURL)
                            }}
                            > 
                                <Typography textAlign="center">{pageTitle}</Typography>
                            </MenuItem>
                            );
                        })}
                        </Menu>
                        </Box>
                    <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: {xs: 'flex',md:'none'}}}
                    > 
                        Mandy Tsang
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex' }}}>
                        {pages.map((page, index) => {
                            const { pageTitle, pageURL} = page;
                            return (
                            <Button
                                key={index}
                                onClick={()=>handleCloseNavMenu(pageURL)}
                                sx={{ my: 2, color: 'white', display: 'block'}}
                            >
                                {pageTitle}
                            </Button>
                            );
                            })}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default NavTabs;

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



