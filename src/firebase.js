// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//store the api key and other protected info into the environment
//add this file to git ignore
export const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_KEY,
  authDomain: "sweatdeck-5c4d3.firebaseapp.com",
  projectId: "sweatdeck-5c4d3",
});

const db = getFirestore(firebaseApp);

export default db;
