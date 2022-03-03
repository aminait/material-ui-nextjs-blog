// import Hero from '../components/hero';
import HighlightedPosts from '../components/posts/highlights';
import NavLayout from '../layout/navLayout';
import { useDocumentTitle } from '../hooks';

const HomePage = async () => {
  useDocumentTitle('Guide - How To Blogs');

  return (
    <>
      {/* <Hero /> */}
      <HighlightedPosts />
    </>
  );
};

HomePage.getLayout = (page) => <NavLayout>{page}</NavLayout>;
export default HomePage;
