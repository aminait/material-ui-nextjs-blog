import React from 'react';
import FormShort from '../form-short';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NewsletterDialog = (props) => {
  const { open, handleClose } = props;
  return (
    <Dialog open={open} TransitionComponent={Transition}>
      {/* <DialogTitle>Subscribe</DialogTitle> */}
      <DialogContent>
        <DialogContentText>
          <FormShort />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        {/* <Button>Subscribe</Button> */}
      </DialogActions>
    </Dialog>
  );
};

export default NewsletterDialog;
