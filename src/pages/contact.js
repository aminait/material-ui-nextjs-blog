import React from 'react';
import NavLayout from '../layout/navLayout';
import { TextField } from '@mui/material';

const ContactPage = () => {
  return <div>contact</div>;
};
ContactPage.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default ContactPage;
