import React, { useRef } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
  Chip,
  Stack,
} from '@mui/material';
import NextLink from 'next/link';
import { Link } from '@mui/material';
import { convertToSlug } from '../../lib/slug';
import TagsList from '../../components/tags/tags-list';

const CardPost = (props) => {
  const imageRef = useRef(null);
  const { details } = props;
  const { title, tags, author, content, excerpt, picture, slug } = details;
  console.log('CardPost -> tags', tags);

  const imagePath = `/images/posts/${slug}/${picture}`;

  const changeBackground = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale3d(1.05, 1.05, 1)';
      imageRef.current.style.transition = 'transform 0.3s ease-in-out';
    }
  };

  const resetBackground = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = '';
      imageRef.current.style.transition = 'transform 0.3s ease-in-out';
    }
  };

  const hey = convertToSlug(title);
  console.log(hey);
  return (
    <Card
      onMouseOver={changeBackground}
      onMouseLeave={resetBackground}
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        borderRadius: '8px',
      }}
    >
      <NextLink href={`/posts/${convertToSlug(title)}`} passHref>
        <div style={{ position: 'relative' }}>
          <CardMedia
            ref={imageRef}
            component="img"
            sx={{
              height: '50vh',
              opacity: '0.8',
              background: 'rgba(64,64,64, 0.9)',
              filter: 'brightness(50%)',
              // transition: 'transform 0.3s ease-in-out',
            }}
            image={picture ? imagePath : ''}
            // ...(image && {alt: "random"})
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
            {tags && (
              <Stack direction="row" spacing={1} sx={{ marginBottom: '1rem' }}>
                {tags.map((tag, i) => (
                  <NextLink
                    href={`/tags/${convertToSlug(tag)}`}
                    passHref
                    key={i}
                  >
                    <Chip
                      sx={{
                        '& .MuiChip-label': {
                          textAlign: 'center',
                          lineHeight: '1rem',
                        },
                        borderWidth: '0.2em',
                        borderStyle: 'solid',
                        borderColor: 'white',
                        color: 'white',
                        backgroundColor: 'transparent',
                        borderRadius: '50px',
                        '&:hover': {
                          opacity: '0.8',
                        },
                      }}
                      label={`${tag}`}
                    />
                  </NextLink>
                ))}
              </Stack>
            )}

            <Typography
              sx={{
                textDecoration: 'none',
                boxShadow: 'none',
                color: 'white',
                opacity: '1',
              }}
              variant="h4"
              component={Link}
            >
              {title}
            </Typography>
            <Divider
              flexItem
              sx={{
                backgroundColor: 'white',
                marginTop: '1rem',
                marginBottom: '1rem',
              }}
            />

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
