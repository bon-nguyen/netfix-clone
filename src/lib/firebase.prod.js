import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';
const firebaseConfig = {
  apiKey: "AIzaSyCzDDgMb-J0s9JEZMK5zDW0sVkdp7hcr5k",
  authDomain: "clone-netflix-1bb35.firebaseapp.com",
  projectId: "clone-netflix-1bb35",
  storageBucket: "clone-netflix-1bb35.appspot.com",
  messagingSenderId: "487950212061",
  appId: "1:487950212061:web:02bc6edbfd5df0b5a93434"
};

Firebase.initializeApp(firebaseConfig);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export default Firebase;