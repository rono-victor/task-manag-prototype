import { initilializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebaejs/9.15.0/firebase-auth.js";
//import {getAnalytics} from "htttps://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
















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
