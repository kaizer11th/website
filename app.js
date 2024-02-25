  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCu45aMvlcA5Qua8hh8yKsYI-DuG7liouw",
    authDomain: "website-787a4.firebaseapp.com",
    projectId: "website-787a4",
    storageBucket: "website-787a4.appspot.com",
    messagingSenderId: "1087356050968",
    appId: "1:1087356050968:web:35619c600ae1ce781dad6d",
    measurementId: "G-7MCHX7BKCS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()


var fullName = document.getElementById("fullname");
var contact = document.getElementById("contact");
var email = document.getElementById("email");
var password = document.getElementById("password");
var copassword = document.getElementById("copassword")
window.signup = function (e) {
if(password)

    if(fullName.value == "" || contact.value=="" || email.value =="" || password.value ==""){
        alert("All Field Are Required")
    }
    if(password.value == copassword.value){
     
    }
    else{
        alert("Password Confirmation is Wrong")
        return false
    }

    e.preventDefault();
    var obj = {
      firstName: fullName.value,
      contact: contact.value,
      email: email.value,
      password: password.value,
    };
  
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        window.location.replace('login.html')
      // console.log(success.user.uid)
      alert("signup successfully")
    })
    .catch(function(err){
      alert("Error in " + err)
    });
   console.log()
    console.log(obj);
  };