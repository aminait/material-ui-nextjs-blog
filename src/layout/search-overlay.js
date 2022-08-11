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

const BlurryDialog = styled(Dialog)(({ theme }) => ({
  backdropFilter: 'blur(5px)',
  // other styles here...
}));

export default function SearchOverlay({ setOpenSearchDrawer }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    setOpenSearchDrawer(false);
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
          }}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {/* <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions> */}
      </BlurryDialog>
    </>
  );
}
