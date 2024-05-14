// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDIfq5dOGE81CRZAZSLfGEtYE_OnTOXp8",
  authDomain: "coin-auth-1.firebaseapp.com",
  projectId: "coin-auth-1",
  storageBucket: "coin-auth-1.appspot.com",
  messagingSenderId: "63283860119",
  appId: "1:63283860119:web:4f79f4d4fd0c46aa5acfd2",
  measurementId: "G-Y053ELF8VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let loginBtn =document.getElementById("login-btn");


loginBtn.addEventListener("click", () =>{
    const email = document.getElementById("gmail").value;
    const password =document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // alert(userCredential)
    window.location.href="./2-page.html";
    alert("logged")
    return user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error)
    // ..
  });
} )

let loginBtn1 =document.getElementById("login-btn1");


loginBtn1.addEventListener("click", () =>{
    const email = document.getElementById("gmail1").value;
    const password =document.getElementById("password1").value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // alert(userCredential)
    window.location.href="./2-page.html";
    alert("logged")
    return user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error)
    // ..
  });
} )

