import products from "../json/products.json";
import tables from "../json/tables.json"
import mahjong from "../json/mahjong.json";
import tableAccessory from "../json/tableAccessory.json";
import other from "../json/other.json";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MESUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

export const getJSON = (url) => {
  switch (url) {
    case "/product/tables":
      return tables;
    case "/product/mahjong":
      return mahjong;
    case "/product/tableAccessory":
      return tableAccessory;
    case "/product/other":
      return other;
    default:
      return products;
  }
};
