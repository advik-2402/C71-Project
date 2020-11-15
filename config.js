import firebase from 'firebase'
require("@firebase/firestore")

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCAvHSXfmWRliLyWmU7G7BlpUWmVKs6d-Y",
  authDomain: "story-hub-d08ed.firebaseapp.com",
  databaseURL: "https://story-hub-d08ed.firebaseio.com",
  projectId: "story-hub-d08ed",
  storageBucket: "story-hub-d08ed.appspot.com",
  messagingSenderId: "516062608376",
  appId: "1:516062608376:web:5f68e5fa67d902aacd340d"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();