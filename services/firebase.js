import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBConyNG5-h5I9qeMknoBA6rW-pzP04Tz4",
//   authDomain: "litemap-41494.firebaseapp.com",
//   // databaseURL: "https://litemap-41494-default-rtdb.firebaseio.com",
//   projectId: "litemap-41494",
//   storageBucket: "litemap-41494.appspot.com",
//   messagingSenderId: "301584968148",
//   appId: "1:301584968148:web:9f6be86b0f2443f2b6ce41",
//   measurementId: "G-DK0GT3G35H",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCHdwhkM0-MHWnA3R0UgxgdqsaBgzm-WQM",
  authDomain: "litemap-8a4c2.firebaseapp.com",
  projectId: "litemap-8a4c2",
  storageBucket: "litemap-8a4c2.appspot.com",
  messagingSenderId: "511397454436",
  appId: "1:511397454436:web:24b1e7c47399f033ad7571",
  measurementId: "G-23Y1ERTF4V"
}

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storedb = getFirestore(app);
