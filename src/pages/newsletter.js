import React from 'react';
import NavLayout from '../layout/navLayout';

const NewsletterPage = () => {
  return <div>NewsletterPage</div>;
};
NewsletterPage.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default NewsletterPage;
