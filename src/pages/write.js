import React from 'react';
import NavLayout from '../layout/navLayout';

const Write = () => {
  return <div>Write</div>;
};

Write.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default Write;
