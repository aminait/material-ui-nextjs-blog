import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const pages = [
  { name: 'Posts', link: '/posts' },
  { name: 'Categories', link: '/categories' },
  { name: 'Newsletter', link: '/newsletter' },
  { name: 'Contact', link: '/contact' },
  { name: 'Write', link: '/write' },
];
const responsivePages = [
  { name: 'My Account', link: '#' },
  { name: 'Write', link: '#' },
  ...pages,
];

const highlightStyles = {
  position: 'relative',
  margin: '0 0.5em',
  padding: '0 0.2em',
  '&:before': {
    content: '',
    zIndex: -1,
    left: '-0.5em',
    top: '0.1em',
    borderWidth: '0.5em',
    borderStyle: 'solid',
    borderColor: 'orange',
    position: 'absolute',
    width: 'calc(100% - 0.5em)',
    borderLeftColor: 'transparent',
  },
  '&:after': {
    content: '',
    zIndex: -1,
    right: 0,
    top: '0.1em',
    borderWidth: '0.5em',
    borderStyle: 'solid',
    borderColor: 'orange',
    position: 'absolute',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    transform: 'rotate(180deg)',
    transformOrigin: 'center right',
  },
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        textTransform: 'capitalize',
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex', cursor: 'pointer' },
            }}
          >
            <Link href="/" passHref>
              <Image src="/logo.jpg" alt="logo" width={150} height={120} />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ height: 35, width: 35 }} />
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {responsivePages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      // color: `${(theme) => theme.palette.primary.main}`,
                      color: 'red',
                    }}
                    textAlign="center"
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none', cursor: 'pointer' },
            }}
          >
            {/* Mobile */}
            <Link href="/" passHref>
              <Image src="/logo.jpg" alt="logo" width={120} height={100} />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                href={`${page.link}`}
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: 'block',
                  color: 'black',
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Search for posts">
              <IconButton
                size="large"
                aria-label="search icon"
                aria-controls="search-appbar"
                // onClick={handleOpenNavMenu}
                color="inherit"
              >
                <SearchIcon sx={{ height: 25, width: 25 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Switch theme">
              <IconButton
                size="large"
                aria-label="switch theme buttom"
                aria-controls="switch-theme"
                // onClick={handleOpenNavMenu}
                color="inherit"
              >
                {true ? (
                  <DarkModeOutlinedIcon sx={{ height: 25, width: 25 }} />
                ) : (
                  <LightModeOutlinedIcon sx={{ height: 25, width: 25 }} />
                )}
              </IconButton>
            </Tooltip>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
