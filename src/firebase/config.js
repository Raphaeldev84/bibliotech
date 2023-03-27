import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//chaves de acesso ao firebase
const firebaseConfig = {
  apiKey: "AIzaSyDv2yP5AGgwLZ7ug6KrJuVv7G1dRkV4O0Q",
  authDomain: "bibliotech-rapha.firebaseapp.com",
  projectId: "bibliotech-rapha",
  storageBucket: "bibliotech-rapha.appspot.com",
  messagingSenderId: "1080780175770",
  appId: "1:1080780175770:web:9e5886fae3a171ce8e6223"
};

//inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
//confirgurando o Authentication e seus recursos
export const auth = getAuth(app); 
//Configura o Firestore e seus recursos
export const db = getFirestore(app);
//configura o storage e seus recursos de upload
export const storage = getStorage(app);