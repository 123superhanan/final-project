

import { initializeApp } from 'firebase/app';

import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut, 
    getAuth} from "firebase/auth"

import {
    addDoc , 
    collection, 
    getFireStore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDg42wy0xgw9hxGDD7q87PhWBw8AXh1aYI",
    authDomain: "blogg-app-7ed7f.firebaseapp.com",
    projectId: "blogg-app-7ed7f",
    storageBucket: "blogg-app-7ed7f.appspot.com",
    messagingSenderId: "793789811181",
    appId: "1:793789811181:web:bc8ee932dea2c932a5bfe4",
    measurementId: "G-MMNN7EG5KZ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db =  getFireStore(app);

  const SignUp = async ( name, email, password) => {

    //user signup function

    try {
      const res =   await createUserWithEmailAndPassword(auth, email, password)
      const user = res.user;
      await addDoc(collection(db, "user"), {
        uid : user.uid,
        name,
        authProvider: "local",
        email
      });
    } catch (error) {
        console.log(error);
        alert(error);
    }
  };

  //user login function

  const login = async (email, password) => {

    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        alert(error);
    }
  }

  //user logout function

  const logout =  () => {
    signOut(auth)
  };


  export{auth, db, login, logout, SignUp}