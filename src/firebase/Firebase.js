// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXz5cf3mUtRszYJHe0fPQZ8SRnzBkKP0M",
  authDomain: "react-redux-ecommerce-4546b.firebaseapp.com",
  projectId: "react-redux-ecommerce-4546b",
  storageBucket: "react-redux-ecommerce-4546b.appspot.com",
  messagingSenderId: "818421038445",
  appId: "1:818421038445:web:490956abb484a91c672e64",
  measurementId: "G-7DZBH19EX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebase = {
    app,
    analytics
}

export default firebase