import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiXUB1WR5PAsRPrx2S7BKn-EFTsBF5zpI",
  authDomain: "netflix-clone-2022-f1c3c.firebaseapp.com",
  projectId: "netflix-clone-2022-f1c3c",
  storageBucket: "netflix-clone-2022-f1c3c.appspot.com",
  messagingSenderId: "460962551936",
  appId: "1:460962551936:web:99452a4e1f1b20aa9e2e65",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
