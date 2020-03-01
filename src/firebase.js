import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD-OBjiHdUa4uPZP4ofqEaLNYBvCacRllQ",
    authDomain: "todoist-clone-25d70.firebaseapp.com",
    databaseURL: "https://todoist-clone-25d70.firebaseio.com",
    projectId: "todoist-clone-25d70",
    storageBucket: "todoist-clone-25d70.appspot.com",
    messagingSenderId: "516240811610",
    appId: "1:516240811610:web:2fa1dfc0ec83d128f49a63"
});

export { firebaseConfig as firebase };