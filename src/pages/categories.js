import React from 'react';
import NavLayout from '../layout/navLayout';

const CategoriesPage = () => {
  return <div>CategoriesPage</div>;
};
CategoriesPage.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default CategoriesPage;
