var firebaseConfig = {
    apiKey: "AIzaSyDZaUpm6q8ssphAzYgyMeD_-vc6fw5eV2A",
    authDomain: "to-do-list-4b553.firebaseapp.com",
    projectId: "to-do-list-4b553",
    storageBucket: "to-do-list-4b553.appspot.com",
    messagingSenderId: "893938574164",
    appId: "1:893938574164:web:edbf106daf73fda06edec1",
    measurementId: "G-KT35SWJ5JN"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();