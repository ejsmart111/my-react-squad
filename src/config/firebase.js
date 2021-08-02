import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA9iDruJ5Ko6BYQdUmsJ0sNyKzViTv8M_g",
    authDomain: "my-squad-pro.firebaseapp.com",
    projectId: "my-squad-pro",
    storageBucket: "my-squad-pro.appspot.com",
    messagingSenderId: "1059387313629",
    appId: "1:1059387313629:web:36182dd55245392a867a34",
    measurementId: "G-BBT6QD8ZNF"
};
  
  
firebase.initializeApp(firebaseConfig)

const databaseRef = firebase.database().ref()

export const playersRef = databaseRef.child('Players')