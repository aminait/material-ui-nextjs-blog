import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import admin from 'firebase-admin';
import serviceAccountKey from './serviceAccountKey';

if (!admin.apps.length) {
  try {
    initializeApp({
      credential: cert(serviceAccountKey),
      databaseURL:
        'https://fullstack-nextjs-ac2a6-default-rtdb.firebaseio.com/',
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

const db = admin.database();

const auth = admin.auth();

const postsRef = db.ref('posts');
export { auth, db, postsRef };
