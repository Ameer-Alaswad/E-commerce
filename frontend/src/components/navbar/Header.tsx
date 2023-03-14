// This component Requires refactoring 
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ViewListIcon from '@mui/icons-material/ViewList';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, useNavigate } from "react-router-dom";
import ShoppingCart from './ShoppingCart';
import { useContext } from "react";
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const navigate = useNavigate()

    const shoppingCartContext = useContext(ShoppingCartContext);
    const { userSignin, setUserSignin, setShippingAddressData, setCartItems, setPaymentMethod } = shoppingCartContext;
    const user: any = localStorage.getItem('userData')
    const parsedUser = JSON.parse(user)
    let userSigned = userSignin
    !userSignin ? userSigned = parsedUser : userSigned = userSignin


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
    const renderMobileMenu = (
        <Menu
            anchorEl={ mobileMoreAnchorEl }
            anchorOrigin={ {
                vertical: 'top',
                horizontal: 'right',
            } }
            id={ mobileMenuId }
            keepMounted
            transformOrigin={ {
                vertical: 'top',
                horizontal: 'right',
            } }
            open={ isMobileMenuOpen }
            onClose={ handleMobileMenuClose }
        >

            <MenuItem>
                <ShoppingCart />
            </MenuItem>
            <MenuItem onClick={ handleProfileMenuOpen }>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem onClick={ handleProfileMenuOpen }>
                <IconButton
                    size="large"
                    aria-label="shopping cart"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <ViewListIcon />
                </IconButton>
                <p>My Orders</p>
            </MenuItem>

        </Menu>
    );

    return (
        <Box sx={ { flexGrow: 1, } }>
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
                        { userSigned ?
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={ menuId }
                                aria-haspopup="true"
                                onClick={ handleProfileMenuOpen }
                                color="inherit"
                            >
                                { userSigned?.name }&nbsp;
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
            { renderMobileMenu }
            { renderMenu }
        </Box>
    );
}
