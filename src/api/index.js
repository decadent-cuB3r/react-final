import products from "../json/products.json";
import tables from "../json/tables.json"
import mahjong from "../json/mahjong.json";
import tableAccessory from "../json/tableAccessory.json";
import other from "../json/other.json";
import firebase from "firebase";
import jsonInfo from "../json/jsonInfo.json"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA32dvcFypCXIFhuD49i0xBjvb5R5Su4oc",
  authDomain: "learn-react-2bd94.firebaseapp.com",
  projectId: "learn-react-2bd94",
  storageBucket: "learn-react-2bd94.appspot.com",
  messagingSenderId: "415435736263",
  appId: "1:415435736263:web:f01a050835bc1090ce6ae2",
  measurementId: "G-TX8X3GMV7L"
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

// Database Route Reference
const wujiCollectionRef = firebase.firestore().collection("WuJiMahjong");
const jsonDocRef = wujiCollectionRef.doc("json");
const allProductsCollectionRef = jsonDocRef.collection("allProducts");

export const getProductById = async (productId) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await allProductsCollectionRef.doc(productId).get();
  return doc.data()
}

export const getProducts = async (url) => {
  const collection = jsonInfo.find(element => element.url === url);
  const collectionName = collection.name || "allProducts";
  console.log(collectionName)
  let jsonProducts = [];

  // QUERY PRODUCTS
  let querySnapshot;
  if (collectionName === "allProducts")
    querySnapshot = await allProductsCollectionRef.get();
  else
    querySnapshot = await allProductsCollectionRef.where("category", "==", collectionName).get();
  querySnapshot.forEach((doc) => {
    jsonProducts.push(doc.data());
  });
  return jsonProducts;
}

export const feedProducts = () => {
  products.forEach((product) => {
    const docRef = allProductsCollectionRef.doc();
    const id = docRef.id;
    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      id
    });
  })
}