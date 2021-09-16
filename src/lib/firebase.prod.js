import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCzDDgMb-J0s9JEZMK5zDW0sVkdp7hcr5k",
  authDomain: "clone-netflix-1bb35.firebaseapp.com",
  projectId: "clone-netflix-1bb35",
  storageBucket: "clone-netflix-1bb35.appspot.com",
  messagingSenderId: "487950212061",
  appId: "1:487950212061:web:02bc6edbfd5df0b5a93434"
};

const firebase = Firebase.initializeApp(firebaseConfig);


export { firebase };