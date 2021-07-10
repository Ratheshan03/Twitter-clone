import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC7yoH585abXN0FmUXx2gN16o7HVvXGP6s",
    authDomain: "twitter-clone-3376e.firebaseapp.com",
    projectId: "twitter-clone-3376e",
    storageBucket: "twitter-clone-3376e.appspot.com",
    messagingSenderId: "774189622693",
    appId: "1:774189622693:web:6d717faecb0a067385f44c",
    measurementId: "G-QRYZ2RHTK6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;