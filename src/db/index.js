// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb9KpiHgAXMeJt7cgqRZh4FdJzzqHbVeU",
  authDomain: "homegroup-8c9a0.firebaseapp.com",
  projectId: "homegroup-8c9a0",
  storageBucket: "homegroup-8c9a0.appspot.com",
  messagingSenderId: "792489548393",
  appId: "1:792489548393:web:ba5df55ef5d98e096ae0f8",
  measurementId: "G-NW0839H1JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase();

// const referencia = ref(database, "Inventario")
// onValue(referencia, (snapshot) => {
//   const data = snapshot.val();
//   // updateStarCount(postElement, data);
//   console.log(data);
// } );

export default database;