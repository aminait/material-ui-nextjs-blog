// eslint-disable-next-line import/no-anonymous-default-export
import { postsRef } from '../../../utils/db';

export const createPost = async (req, res) => {
  try {
    const { slug } = req.body;
    console.log('createPost -> slug', slug);
    // const posts = await postsRef.get();
    // const postsData = posts.docs.map((post) => post.data());

    // if (postsData.some((post) => post.slug === slug)) {
    //   res.status(400).end();
    // } else {
    //   const { id } = await postsRef.add({
    //     ...req.body,
    //     created: new Date().toISOString(),
    //   });
    res.status(201).json({ id });
    // }
  } catch (e) {
    res.status(400).end();
  }
};

// export default async (req, res) => {
//   try {
//     const posts = await postsRef.get();
//     // console.log('getAllPosts -> posts', posts);
//     const postsData = posts.docs.map((post) => post.data());
//     console.log('getAllPosts -> postsData', postsData);

//     res.status(200).json({ posts: postsData });
//   } catch (e) {
//     res.status(400).end();
//   }
// };
