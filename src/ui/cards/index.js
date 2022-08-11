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
import { convertToSlug } from '../../lib/slug';

const CardPost = (props) => {
  const { details } = props;
  const { title, tags, author, content, excerpt, picture } = details;

  const hey = convertToSlug(title);
  console.log(hey);
  return (
    <Card
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.15s ease-in-out',
        '&:hover': { transform: 'scale3d(1.02, 1.02, 1)', cursor: 'pointer' },
      }}
    >
      <NextLink href={`/posts/${convertToSlug(title)}`} passHref>
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
            <Divider flexItem sx={{ backgroundColor: 'white' }} />

            <Typography>{excerpt}</Typography>
          </div>
        </div>
        {/* <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{excerpt}</Typography>
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
