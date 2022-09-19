// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen} from './view/index'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcvHMtNLA38q4Jm5wOtN5jDJaUK5B7uSs",
  authDomain: "chat-arr2.firebaseapp.com",
  projectId: "chat-arr2",
  storageBucket: "chat-arr2.appspot.com",
  messagingSenderId: "623276279226",
  appId: "1:623276279226:web:6e15b7917e66b3cb520983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

setActiveScreen("loginPage");