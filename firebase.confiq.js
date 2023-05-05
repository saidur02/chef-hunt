// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1iU-VFa7MzIKIOr8avXNCWYwYY53EpGA",
  authDomain: "chef-hunt-cc1dd.firebaseapp.com",
  projectId: "chef-hunt-cc1dd",
  storageBucket: "chef-hunt-cc1dd.appspot.com",
  messagingSenderId: "721305736545",
  appId: "1:721305736545:web:77a83416a35d064817e120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;