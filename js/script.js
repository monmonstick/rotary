import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";


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
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();


function showMessage(message, divId) {
   var Div = document.getElementById(divId);
   Div.style.display = "block";
   Div.innerHTML = message;
   Div.style.opacity = 1;
   setTimeout(function () {
      Div.style.opacity = 0;

   }, 10000);
}


const submitSignIn = document.getElementById('submitSignIn');
submitSignIn.addEventListener("click",  (event) =>{
   event.preventDefault()


   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;
   const auth = getAuth();


   signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         const adminEmail = 'admin@example.com';
         const adminPassword = 'password123';
         if (email === adminEmail && password === adminPassword) {
            // Kung tama ang email at password, dadalhin sa admin dashboard
            window.location.href = 'admin.html'; // Palitan ito sa aktwal na URL ng iyong admin dashboard
        } else {
         showMessage("login successful", 'signInMessage');
        
         localStorage.setItem('users', user.uid);
         window.location.href = 'userpage.html';
        }



     

        





      })
      .catch((error) => {
         const errorCode = error.code;
         if (errorCode == 'auth/email-already-in-use') {
            showMessage('Email Address Alredy Exists !!!', 'signInMessage');
         }
         else {
            showMessage('Your Account not found', 'signInMessage');
         }
      })

});




const reset = document.getElementById("reset");
reset.addEventListener("click", function (event) {
   event.preventDefault()
   window.location.href = 'reset.html';






});

const google = document.getElementById("google");
google.addEventListener("click", function () {


   const auth = getAuth();
   signInWithPopup(auth, provider)
      .then((result) => {

         const credential = GoogleAuthProvider.credentialFromResult(result);
         const user = result.user;
         console.log(user);
         window.location.href = 'userpage.html';

      }).catch((error) => {

         const errorCode = error.code;
         const errorMessage = error.message;


      });



});




