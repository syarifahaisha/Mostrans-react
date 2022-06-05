import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAYCYMmS-jFUhplmiNXxTnsmGtyakc3afY",
    authDomain: "mostrans-rickandmorty.firebaseapp.com",
    projectId: "mostrans-rickandmorty",
    storageBucket: "mostrans-rickandmorty.appspot.com",
    messagingSenderId: "537152610945",
    appId: "1:537152610945:web:ec70e3678d8f0dfd19e380",
    measurementId: "G-VBT03454ZZ"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore()