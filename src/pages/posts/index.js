import React, { useState, useEffect } from 'react';
import NavLayout from '../../layout/navLayout';
import { getAllPosts } from '../../lib/posts-util';
import { Grid, Typography, Divider, Stack, Chip } from '@mui/material';
import CardPost from '../../ui/cards';
import PostsList from '../../components/posts/posts-list';
import { useResponsive } from '../../hooks/useResponsive';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

const PostsPage = (props) => {
  const { posts } = props;
  const [loading, setLoading] = useState(true);
  const { rc } = useResponsive();
  const [postsData, setPostsData] = useState([]);
  const router = useRouter();
  console.log('PostDetailsHeader -> router', router);
  const { search, tag } = router.query;
  // useDocumentTitle('Guide - A');
  console.log(
    '-----------------------------------------------------PostsPage -> search',
    search
  );

  useEffect(() => {
    if (search) {
      const filteredPosts = posts.filter((post) => {
        return post.title.toLowerCase().includes(search);
      });
      setPostsData(filteredPosts);
      setLoading(false);
    } else {
      setPostsData(posts);
      setLoading(false);
    }

    if (tag) {
      const filteredPosts = posts.filter((post) => {
        return post.tags.includes(tag);
      });
      setPostsData(filteredPosts);
    }
  }, [posts, search, tag]);
  return (
    <>
      <Stack direction="column">
        <NextLink href={`/posts`} passHref>
          <Typography variant="h2" gutterBottom sx={{ cursor: 'pointer' }}>
            {rc.posts.title}
          </Typography>
        </NextLink>
        <Typography variant="p">
          {tag ? (
            <>
              {'Posts tagged '}
              <Chip
                sx={{
                  '& .MuiChip-root': {
                    borderRadius: '2px',
                  },
                  '& .MuiChip-label': {
                    textAlign: 'center',
                    lineHeight: '1.9rem',
                    // fontSize: '4rem',
                  },
                  margin: '0.5rem',
                }}
                label={`${tag}`}

                // onDelete={handleDelete}
                // sx={{ width: '250px' }}
              />
            </>
          ) : (
            rc.posts.subtitle
          )}
        </Typography>
      </Stack>
      <Divider
        variant="middle"
        style={{ width: '100%' }}
        sx={{ margin: '2rem' }}
      />
      {loading ? <p>loading....</p> : <PostsList posts={postsData} />}
    </>
  );
};

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
}

PostsPage.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default PostsPage;
