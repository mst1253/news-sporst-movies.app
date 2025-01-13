import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCl6wlvJYZ0aZ1XuTeCtiYcaDTQHNwbgzg",
  authDomain: "news-pro-45e0b.firebaseapp.com",
  projectId: "news-pro-45e0b",
  storageBucket: "news-pro-45e0b.appspot.com",
  messagingSenderId: "824616070270",
  appId: "1:824616070270:web:2239bb69bdcf2f3e89bc2f",
  measurementId: "G-228QPCBV0V"
};

const app=initializeApp(firebaseConfig)
export const db = getFirestore(app);
export const storage = getStorage(app);


