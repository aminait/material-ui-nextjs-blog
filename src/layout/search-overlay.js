import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const BlurryDialog = styled(Dialog)(({ theme }) => ({
  backdropFilter: 'blur(5px)',
  // other styles here...
}));

export default function SearchOverlay({ setOpenSearchDrawer }) {
  const [open, setOpen] = React.useState(true);
  const [search, setSearch] = React.useState('');
  console.log('SearchOverlay -> search', search);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    setOpenSearchDrawer(false);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      console.log('value', e.target.value);
      // put the login here
      router.push(`/posts?search=${search}`);
      handleClose();
    }
  };

  return (
    <>
      <BlurryDialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-container': {
            //   justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: '4rem',
          },
        }}
      >
        <TextField
          placeholder="Search..."
          autoFocus
          sx={{
            width: '400px',
            '& .MuiOutlinedInput-root': {
              font: 'caption',
            },
          }}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onKeyDown={handleKeyDown}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </BlurryDialog>
    </>
  );
}
