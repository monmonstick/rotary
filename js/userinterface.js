import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";


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
const auth=getAuth();
const db=getFirestore();


onAuthStateChanged(auth, (user)=>{
    const users=localStorage.getItem('users');
    if(users){
        const docRef = doc(db, "users", users);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('fnames').innerText=userData.firstname;
                document.getElementById('lnames').innerText=userData.email;
                document.getElementById('emails').innerText=userData.lastname;
              

            }else{
                console.log("no document");
                
            }
        })
        .catch((error)=>{
            console.log("error getting document");

        })
    }else{
        console.log("user not found")
    }
})


const logout=document.getElementById('log');

logout.addEventListener('click', ()=>{
    localStorage.removeItem('users');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('error', error);
    })
})
