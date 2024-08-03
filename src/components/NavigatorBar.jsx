import { useCallback, useEffect, useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import {AppBar,Button,Box,Toolbar,IconButton,Typography,InputBase,Badge,MenuItem,Menu} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from 'constexts/AuthContext';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  display: 'flex', // İçindeki öğelerin yatay olarak hizalanmasını sağlar
  alignItems: 'center', // İçindeki öğeleri dikey olarak hizalar
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const {currentUser}=useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleLogin = () => {
    navigate("auth/signin")
  }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sepetim</MenuItem>      
      <MenuItem onClick={handleMenuClose}>Faturalarım</MenuItem>      
      <MenuItem onClick={handleMenuClose}>Çıkış</MenuItem>      
    </Menu>
  );
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>        
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <LocalGroceryStoreIcon />
          </Badge>
        </IconButton>
        <p>Sepetim</p>
      </MenuItem>
      {currentUser ?
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Bildirimler</p>
        </MenuItem>:null}
      {currentUser ?
      <MenuItem onClick={handleProfileMenuOpen}>
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
      </MenuItem>:
      <MenuItem onClick={handleLogin}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <p>Giriş</p>
    </MenuItem>}
    </Menu>
  );
  
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      // Scroll down
      setShow(false);
    } else {
      // Scroll up
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  },[lastScrollY]);
  
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, controlNavbar]);
  const [searchValue, setSearchValue]=useState();
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  }
  const searchNavigate = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      const urlParams = new URLSearchParams();
      urlParams.set('q', searchValue.trim());
      const url = "search?" + urlParams.toString();
      navigate(url);
    }
  };
  return (
    <Box>
      <AppBar 
        sx={{
          flexGrow: 1,
          opacity: show ? 1 : 0,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          transform: show ? 'translateY(0)' : `translateY(-${lastScrollY}px)`,
          width:"100%",
          position: 'fixed',
          zIndex: 10,
          bgcolor: "white",
          color: "black"
          }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Logo sx={{display: { xs: 'none', md: 'flex' }}}/>
          <form onSubmit={searchNavigate}>
            <Search>
              <StyledInputBase
                placeholder="Ürün"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearchValue}
              />
              <SearchIconWrapper>
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </SearchIconWrapper>
            </Search>
          </form>          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <LocalGroceryStoreIcon />
              </Badge>
            </IconButton>
            {currentUser ?
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>:null}
            {currentUser ?
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>:
              <Button
                onClick={handleLogin}
                startIcon={<AccountCircle/>}
                disableTouchRipple
                sx={{color:"black",}}
              >Giriş</Button>}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
const Logo = ({sx}) => {   
  const navigate = useNavigate();  
  const location = useLocation();
  const handleClick = () => {
    if (location.pathname !== "/")
      navigate('/');
  }
  return(
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{
        ...sx,
        textAlign:"center",
        position: 'relative',
        cursor: "pointer",
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: 25,
        "&:before, &:after": {
          content: '""',
          position: 'absolute',
          bottom: 0,
          width: 0,
          height: '2px',
          backgroundColor: 'black',
          transition: 'width 0.4s ease'
        },
        "&:before": {
          left: '50%'
        },
        "&:after": {
          right: '50%'
        },
        "&:hover:before, &:hover:after": {
          width: '50%'
        }
      }}
      onClick={handleClick}
    >
      {process.env.REACT_APP_LOGO}
    </Typography>
  )
}
export {Logo}