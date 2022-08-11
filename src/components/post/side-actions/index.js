import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import BottomAppBar from './bottomBar';
import { ThemeContext } from '../../../context/ThemeContext';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { CssBaseline } from '@mui/material';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { theme } = React.useContext(ThemeContext);

  const [liked, setLiked] = React.useState(false);
  const [bookmarked, setBookmarked] = React.useState(false);

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

  const handleClickLike = () => {
    setLiked(!liked);
  };

  const handleClickBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const menuId = 'primary-search-account-menu';

  return (
    <>
      <CssBaseline />
      <Box>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            width: '50px',
            backgroundColor: 'transparent',
            color: theme === 'light' ? 'black' : 'white',
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="column">
              <IconButton
                size="large"
                aria-label="add to favorites"
                color="inherit"
                onClick={handleClickLike}
              >
                {liked ? (
                  <FavoriteIcon color="primary" />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
              <IconButton
                size="large"
                aria-label="add to bookmarks"
                color="inherit"
                onClick={handleClickBookmark}
              >
                {bookmarked ? (
                  <BookmarkIcon color="primary" />
                ) : (
                  <BookmarkBorderIcon />
                )}
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <ShareIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="view more options"
                color="inherit"
              >
                <MoreHorizIcon />
              </IconButton>
              <Divider flexItem />
              <IconButton size="large" aria-label="write" color="inherit">
                <BorderColorIcon />
              </IconButton>
            </Stack>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            {/* LOOOOK HERE */}
            {/* <BottomAppBar /> */}
          </Box>
        </AppBar>
      </Box>
    </>
  );
}
