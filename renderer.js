import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUC9LQJrRNoDC3XEbYNJXxq6bRlqPPbUE",
  authDomain: "practica1-7d78b.firebaseapp.com",
  projectId: "practica1-7d78b",
  storageBucket: "practica1-7d78b.firebasestorage.app",
  messagingSenderId: "549530084584",
  appId: "1:549530084584:web:6a99e147da25eb97d1155d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Referencias al DOM
const loginScreen = document.getElementById('pantalla-login');
const welcomeScreen = document.getElementById('pantalla-bienvenida');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');
const userEmailLabel = document.getElementById('user-email');

onAuthStateChanged(auth, (user) => {
    if (user) {
        loginScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
        userEmailLabel.textContent = user.email;
        errorMsg.textContent = '';
    } else {
        // Si no esta logueado, mostramos el login
        loginScreen.classList.remove('hidden');
        welcomeScreen.classList.add('hidden');
        emailInput.value = '';
        passInput.value = '';
    }
});

document.getElementById('btn-register').addEventListener('click', () => {
    signInWithEmailAndPassword(auth, emailInput.value, passInput.value).catch(err => errorMsg.textContent = 'Error: ' + err.message);
});

document.getElementById('btn-login').addEventListener('click', () => {
    createUserWithEmailAndPassword(auth, emailInput.value, passInput.value).catch(err => errorMsg.textContent = 'Error: ' + err.message);
});

document.getElementById('btn-logout').addEventListener('click', () => {
    signOut(auth);
});