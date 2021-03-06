import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DB,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const databaseRef = firebase.database().ref();
export const checkRef = databaseRef.child('user');
export const aboutRef = databaseRef.child('about');
export const nameRef = databaseRef.child('name');
export default firebase;
