import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  // Paste your Firebase SDK configuration here
  apiKey: "AIzaSyAMHdQfawlwZbRZBJkEFrd_xEoa5WJxXHg",
  authDomain: "hobpanion.firebaseapp.com",
  projectId: "hobpanion",
  storageBucket: "hobpanion.appspot.com",
  messagingSenderId: "750239391967",
  appId: "1:750239391967:web:6ee141c6f94dbf4c89c96a",
  measurementId: "G-8GCX8964F8",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Get a reference to the storage service, which is used to upload files
const storage = firebase.storage();

export { storage };
