/* eslint-disable import/no-anonymous-default-export */

import { postsRef } from '../../utils/db';

// export const createPost = async (req, res) => {
//   try {
//     const { slug } = req.body;
//     const posts = await postsRef.get();
//     const postsData = posts.docs.map((post) => post.data());

//     if (postsData.some((post) => post.slug === slug)) {
//       res.status(400).end();
//     } else {
//       const { id } = await postsRef.add({
//         ...req.body,
//         created: new Date().toISOString(),
//       });
//       res.status(201).json({ id });
//     }
//   } catch (e) {
//     res.status(400).end();
//   }
// };

export default async (req, res) => {
  try {
    await postsRef.once('value', (data) => {
      console.log('data', data.val());
      const posts = data.val();
      res.status(200).json({ posts });
    });
  } catch (e) {
    res.status(400).end();
  }
};
