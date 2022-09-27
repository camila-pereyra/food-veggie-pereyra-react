import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA95S5LQqijR7yNuAV8CTG-f1wdZywaRNs",
  authDomain: "coderhouse-ecommerce-bca19.firebaseapp.com",
  projectId: "coderhouse-ecommerce-bca19",
  storageBucket: "coderhouse-ecommerce-bca19.appspot.com",
  messagingSenderId: "282551287161",
  appId: "1:282551287161:web:1b6f75a605b9637cf083a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /*   <React.StrictMode>
   */ <App />
  /*   </React.StrictMode>
   */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
