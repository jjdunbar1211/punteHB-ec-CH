import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAvF0HveJInHu0lNfGkN-JpKrOAirhkpZ0",
  authDomain: "puntehb-test.firebaseapp.com",
  projectId: "puntehb-test",
  storageBucket: "puntehb-test.appspot.com",
  messagingSenderId: "314006312153",
  appId: "1:314006312153:web:f84581451c419f8f8f1ac8"
};

const app = firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage();
export const firestore = firebase.firestore(app)