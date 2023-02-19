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


const main = document.getElementById("main");
const createacc = document.getElementById("create-acc");

const emailinput = document.getElementById("email")
const passwordinput = document.getElementById("password")
const submitButton = document.getElementById("submit")


const signupEmailIn = document.getElementById("email-signup")
const signupPasswordIn = document.getElementById("password-signup")
const confirmSignupEmailIn = document.getElementById("confirm-email-signup")
const confirmSignupPassword = document.getElementById("confirm-password-signup")
const createaccbtn = document.getElementById("create-acc-btn")


const signupButton =document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");

var email;
password,
signupEmail,
signupPassword,
confirmSignupEmail,
confirmSignupPassword;


createaccbtn.addEventListener("click", () => {
    var isVerified = true;

    signupEmail = signupEmailIn.value;
    confirmSignupEmail = confirmSignupEmailIn.value;
    if ( signupEmail != confirmSignupEmailIn ) {
        window.alert("Email fields do not match. Try again.");
        isVerified = false;
    }

    signupPassword = signupPasswordIn.value;
    confirmSignupPassword = confirmSignupPasswordIn.value;
    if ( signupPassword != confirmSignupPassword) {
        window.alert("Password fields do not match. Try again.");
        isVerified = false;
    }

    if (
        signupEmail == null ||
        confirmSignupEmail == null ||
        signupPassword == null ||
        confirmSignupPassword == null ||
    ) {
        window.alert("Please fill out all required fields.");
        isVerified = false;
    }

    createUserWithEmailAndPassword(auth, signupEmail, signupPassword).then(() => {
        window.alert("Successful Account Created");
        window.location = "./createTask.html";

    }) .catch ((error) => {
        const errorMessage = error.message
        window.alert(errorMessage)
        //window.alert("Error Occurred. Try again")
    }) ;
});

submitButton.addEventListener("click", function (){
    email = emailinput.value
    password = passwordinput.value

    signInWithEmailAndPassword(auth, email, password).then(() => {
        window.alert("Success! Welcome back");
        window.location = "./createTask.html";

    }).catch((error) => {
        const errorMessage = error.message;
            window.alert(errorMessage);

            //window.alert("Error Occurred. Try Again")
    });
});





signupButton.addEventListener("click", () => {
    main.style.display = "none";
    createacc.style.display = "block";
});

returnBtn.addEventListener("click", function () {
    main.style.display = "block";
    createacc.style.display = "none";
});
