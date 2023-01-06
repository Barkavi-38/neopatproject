import { initializeApp } from "firebase/app";
import{getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PORJECTID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)