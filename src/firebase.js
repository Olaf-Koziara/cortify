import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCgsabDqidDNdYcWGN_kLd0KK7-xjAOJEU",
    authDomain: "cortify.firebaseapp.com",
    projectId: "cortify",
    storageBucket: "cortify.appspot.com",
    messagingSenderId: "484353822037",
    appId: "1:484353822037:web:e1607a7d1f9cd0628b73dc",
    measurementId: "G-6B7T047KLN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);