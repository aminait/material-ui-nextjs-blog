import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  console.log('getFeaturedPosts -> allPosts', allPosts);
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}

export function getAllTags() {
  const allPosts = getAllPosts();
  const tagCounts = {};

  for (const post of allPosts) {
    for (const tag of post.tags) {
      tagCounts[tag] = tagCounts[tag] ? tagCounts[tag] + 1 : 1;
    }
  }

  return tagCounts;
}
