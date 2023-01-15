import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

// Optionally import the services that you want to use

// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCpqxNBeiRGm1HANUcD5Cjp7wVexMPz1iQ",
  authDomain: "rnfooddelivery-3a94e.firebaseapp.com",
  projectId: "rnfooddelivery-3a94e",
  storageBucket: "rnfooddelivery-3a94e.appspot.com",
  messagingSenderId: "377006056212",
  appId: "1:377006056212:web:e3a7a47aa17b1755625801",
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
