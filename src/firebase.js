import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbX3tT5whCTzPm3Y0nPl2f6vKzSuD_v1Q",
  authDomain: "linked-in-clone-824fc.firebaseapp.com",
  projectId: "linked-in-clone-824fc",
  storageBucket: "linked-in-clone-824fc.appspot.com",
  messagingSenderId: "904061856517",
  appId: "1:904061856517:web:8541f834e172256037256c",
  measurementId: "G-7775X2LJQX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth} ;

