import React from 'react';
import NavLayout from '../layout/navLayout';
import ToggleButtonNotEmpty from '../ui/buttons/toggleButton';

const DevelopersPage = () => {
  return (
    <div>
      hi developers
      <ul>
        <li>Tech stack</li>
        <li>Components</li>
        <li>To Do</li>
        <li>Check list</li>
        <li>Performance metrics</li>
      </ul>
      <ToggleButtonNotEmpty />
    </div>
  );
};
DevelopersPage.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default DevelopersPage;
