// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSAyamlyanHJv4TclT1Gs2YF7Ttfu9kXg",
  authDomain: "mnbsocial-8e383.firebaseapp.com",
  projectId: "mnbsocial-8e383",
  storageBucket: "mnbsocial-8e383.appspot.com",
  messagingSenderId: "87954636722",
  appId: "1:87954636722:web:33b06679b8dbe6a24a2eab",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
