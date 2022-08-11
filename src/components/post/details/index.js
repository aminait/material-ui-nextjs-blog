import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

const PostDetails = (props) => {
  const { post } = props;
  console.log('PostDetails -> post', post);

  const customComponents = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === 'image') {
        const image = node.children[0];
        return (
          <div>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1];
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          // eslint-disable-next-line react/no-children-prop
          children={children}
        />
      );
    },
  };
  return (
    <Box alignItems="space-between">
      <article>
        <ReactMarkdown components={customComponents}>
          {post.content}
        </ReactMarkdown>
      </article>
    </Box>
  );
};

export default PostDetails;
