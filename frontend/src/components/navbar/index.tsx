// This component Requires refactoring 
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, useNavigate } from "react-router-dom";
import ShoppingCart from './ShoppingCart';
import { useContext } from "react";
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';
import { Search, SearchIconWrapper, StyledInputBase } from './MuiComponents';
import MobileMenu from './MobileMenu';



export default function PrimarySearchAppBar() {
    const navigate = useNavigate()

    const shoppingCartContext = useContext(ShoppingCartContext);
    const { userSignin, setUserSignin, setShippingAddressData, setCartItems, setPaymentMethod } = shoppingCartContext;


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);

    };

    const handleMobileMenuClose = () => {
        setAnchorEl(null);
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMobileMoreAnchorEl(null);

    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleSignOut = () => {
        localStorage.removeItem("userData")
        localStorage.removeItem("shippingCardAddress")
        setShippingAddressData({
            fullName: "",
            address: "",
            city: "",
            postalCode: "",
            country: ""
        })
        setCartItems([])
        setUserSignin(null)
        setPaymentMethod("")
        setAnchorEl(null);
        handleMobileMenuClose();
        navigate('/user/signin')
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={ anchorEl }
            anchorOrigin={ {
                vertical: 'top',
                horizontal: 'right',
            } }
            id={ menuId }
            keepMounted
            transformOrigin={ {
                vertical: 'top',
                horizontal: 'right',
            } }
            open={ isMenuOpen }
            onClose={ handleMenuClose }
        >
            <MenuItem onClick={ handleMenuClose }>Profile</MenuItem>
            <MenuItem onClick={ handleMenuClose }>My account</MenuItem>
            <MenuItem onClick={ () => navigate('/ordershistory') }>My Orders</MenuItem>
            <MenuItem onClick={ handleSignOut }>Sign out</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const MobileMenuProps = {
        mobileMoreAnchorEl,
        isMobileMenuOpen,
        handleMobileMenuClose,
        handleProfileMenuOpen
    }
    return (
        <div id="header-container"  >
            <AppBar position="fixed">
                <Toolbar  >
                    <Link to="/" style={ { color: "white", textDecoration: "none" } }>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={ { display: { xs: 'none', sm: 'block' } } }
                        >
                            E-commerce
                        </Typography>
                    </Link>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={ { 'aria-label': 'search' } }
                        />
                    </Search>
                    <Box sx={ { flexGrow: 1 } } />
                    <Box sx={ { display: { xs: 'none', md: 'flex' } } }>
                        <ShoppingCart />
                        { userSignin ?
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={ menuId }
                                aria-haspopup="true"
                                onClick={ handleProfileMenuOpen }
                                color="inherit"
                            >
                                { userSignin?.name }&nbsp;
                                <AccountCircle />
                            </IconButton>
                            :
                            <Box sx={ { marginTop: "11px" } }>
                                <Link style={ { color: "white", textDecoration: "none" } } to="/user/signin">Signin!</Link> /
                                <Link style={ { color: "white", textDecoration: "none" } } to="/user/signup"> Signup!</Link>
                            </Box>
                        }

                    </Box>
                    <Box sx={ { display: { xs: 'flex', md: 'none' } } }>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={ mobileMenuId }
                            aria-haspopup="true"
                            onClick={ handleMobileMenuOpen }
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <MobileMenu { ...MobileMenuProps } />
            { renderMenu }
        </div>
    );
}
