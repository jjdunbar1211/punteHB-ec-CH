import firebase from 'firebase/app'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCw574Sg858Ng3TqgwL4Jh4XhVma33pyHY",
    authDomain: "ecommerce-puntehb.firebaseapp.com",
    projectId: "ecommerce-puntehb",
    storageBucket: "ecommerce-puntehb.appspot.com",
    messagingSenderId: "619185656817",
    appId: "1:619185656817:web:dfe4451a4f61140c376a50"
  };

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)