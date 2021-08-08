import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAKdw0SpXFrKKketfPIYfHcYOdPozY7940",
    authDomain: "firsttsapp.firebaseapp.com",
    databaseURL: "https://firsttsapp-default-rtdb.firebaseio.com",
    projectId: "firsttsapp",
    storageBucket: "firsttsapp.appspot.com",
    messagingSenderId: "174598211345",
    appId: "1:174598211345:web:29d868fc7cd9170ef1eeb0"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();