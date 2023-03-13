import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDExIIRBUvKLQfcwinPIUjiDxHS9oxdXMg",
    authDomain: "todolistforseverstal.firebaseapp.com",
    projectId: "todolistforseverstal",
    storageBucket: "todolistforseverstal.appspot.com",
    messagingSenderId: "684666813312",
    appId: "1:684666813312:web:4d507e68a8f8eea4e6df65",
    measurementId: "G-0C09M4DYVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);