import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from '@mui/material';
import NextLink from 'next/link';
import { Link } from '@mui/material';

const CardPost = (props) => {
  const { details } = props;
  const { title, tags, author, content, subtitle, picture, index } = details;

  const convertToSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  };
  const hey = convertToSlug(title);
  console.log(hey);
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.15s ease-in-out',
        '&:hover': { transform: 'scale3d(1.02, 1.02, 1)', cursor: 'pointer' },
      }}
    >
      <NextLink
        href={`/posts/i=${index}&title=${convertToSlug(title)}`}
        passHref
      >
        <div style={{ position: 'relative' }}>
          <CardMedia
            component="img"
            sx={{
              height: '50vh',
              opacity: '0.8',
              background:
                'linear-gradient(rgba(211, 211, 211, 0.45), rgba(211, 211, 211, 0.45))',
            }}
            image={picture}
            alt="random"
          />
          <div
            style={{
              position: 'absolute',
              color: 'white',
              top: 10,
              left: '50%',
              width: '100%',
              padding: '20px',
              transform: 'translateX(-50%)',
            }}
          >
            <Typography
              sx={{
                textDecoration: 'none',
                boxShadow: 'none',
                color: '#fff',
              }}
              variant="h4"
              component={Link}
            >
              {title}
            </Typography>
            <Typography>{subtitle}</Typography>
            <Divider flexItem sx={{ backgroundColor: 'white' }} />
            <Typography>By {author}</Typography>
          </div>
        </div>
        {/* <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{subtitle}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
            View
          </Button>
          <Button size="small" color= "secondary">
            Edit
          </Button>
        </CardActions> */}
      </NextLink>
    </Card>
  );
};

export default CardPost;
