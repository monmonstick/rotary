import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyBtpRSvsf-vSAg-vpdDVPHQplQq2Fx1iq8",
  authDomain: "users-fc1e2.firebaseapp.com",
  projectId: "users-fc1e2",
  storageBucket: "users-fc1e2.firebasestorage.app",
  messagingSenderId: "507103246697",
  appId: "1:507103246697:web:fbb7f09dab366a8d36a5f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
  const db = getFirestore();


function showMessage(message, divId) {
  var Div = document.getElementById(divId);
  Div.style.display = "block";
  Div.innerHTML = message;
  Div.style.opacity = 1;
  setTimeout(function () {
    Div.style.opacity = 0;

  }, 5000);
}



const submit = document.getElementById('submitbtn');
submit.addEventListener("click",  (event)=> {
  event.preventDefault()


  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const firstname = document.getElementById('fname').value;
  const lastname = document.getElementById('lname').value;


  const auth = getAuth();
  const db = getFirestore();


  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      const userData = {
        email: email,
        firstname: firstname,
        lastname: lastname
      };

      showMessage("Successfully register", 'signUp');
      localStorage.setItem('users', user.uid);
      const docRef=doc(db, "users", user.uid);
      setDoc(docRef, userData)
        .then(() =>{
          window.location.href = 'singin.html';

        })

        .catch((error) => {
          console.error("error writing document", error);
        });


    })


    .catch((error) => {
      const errorCode = error.code;
      if (errorCode == 'auth/email-already-in-use') {
        showMessage('Email Address Already Exists !!!', 'signUp');
        
      }
      else {
        showMessage('unable to create', 'signUp');
     }
     
     signup.reset();
    })


    
   
  


});




