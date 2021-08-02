import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_KEY,
    authDomain: "my-squad-pro.firebaseapp.com",
    projectId: "my-squad-pro",
    storageBucket: "my-squad-pro.appspot.com",
    messagingSenderId: "1059387313629",
    appId: process.env.REACT_APP_ID,
    measurementId: "G-BBT6QD8ZNF"
};
  
  
firebase.initializeApp(firebaseConfig)

const databaseRef = firebase.database().ref()

export const playersRef = databaseRef.child('Players')
export const SquadRef = databaseRef.child('Squads')