// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCImuzfS0-iwI4V5N7GCUdwAZPmEybbwRI",
  authDomain: "tienda-react-384c6.firebaseapp.com",
  projectId: "tienda-react-384c6",
  storageBucket: "tienda-react-384c6.appspot.com",
  messagingSenderId: "783168269346",
  appId: "1:783168269346:web:32a366727ee58788fdee7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db