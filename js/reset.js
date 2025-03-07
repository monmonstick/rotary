import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";


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



 const sub = document.getElementById("sub");
sub.addEventListener("click", function (event) {
   event.preventDefault()
   


   const email = document.getElementById("email").value;

   sendPasswordResetEmail(auth, email)
      .then(() => {
         alert("Reset password will sent your Gmail account!");
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         alert(errorMessage)
      })

      

});