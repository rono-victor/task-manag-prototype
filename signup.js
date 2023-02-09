import { initilializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebaejs/9.15.0/firebase-auth.js";
//import {getAnalytics} from "htttps://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyA-ESRk2qN_r1z9Qc8OUZ1bW4oufAQvG9c",
    authDomain: "plp-web-c2d56.firebaseapp.com",
    databaseURL: "https://plp-web-c2d56-default-rtdb.firebaseio.com",
    projectId: "plp-web-c2d56",
    storageBucket: "plp-web-c2d56.appspot.com",
    messagingSenderId: "778381944183",
    appId: "1:778381944183:web:70b6e09f83017335ef2d72",
    measurementId: "G-BZ4CHD34N9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
















const main=document.getElementById("main");
const createacc = document.getElementById("create-acc");

const signupButton =document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");

signupButton.addEventListener("click", () => {
    main.style.display = "none";
    createacc.style.display = "block";
});

returnBtn.addEventListener("click", function () {
    main.style.display = "block";
    createacc.style.display = "none";
});
