import app from 'firebase/app';
import fb from '../firebaseConfig';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: fb.apiKey,
  authDomain: fb.authDomain,
  databaseURL: fb.databaseURL,
  projectId: fb.projectId,
  storageBucket: fb.storageBucket,
  messagingSenderId: fb.messagingSenderId,
  appId: fb.appId,
};

export const googleProvider = new app.auth.GoogleAuthProvider();
export const facebookProvider = new app.auth.FacebookAuthProvider();

app.initializeApp(firebaseConfig);

export default app;
