


// function initializeFirebase() {
//     // Firebase Configuration
//     const firebaseConfig = {
//         apiKey: "AIzaSyAxRQIC8Ypclc1Xg742zpdDgrghP1VkDWg",
//         authDomain: "school-admin-489e6.firebaseapp.com",
//         projectId: "school-admin-489e6",
//         storageBucket: "school-admin-489e6.appspot.com",
//         messagingSenderId: "549677402125",
//         appId: "1:549677402125:web:3fbada8a196dee7cdf2d44",
//         measurementId: "G-FFHTZXKS9W"
//     };

//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
//     window.db = firebase.firestore(); // Store Firestore globally

//     console.log("Firebase initialized successfully.");
// }

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxRQIC8Ypclc1Xg742zpdDgrghP1VkDWg",
        authDomain: "school-admin-489e6.firebaseapp.com",
        projectId: "school-admin-489e6",
        storageBucket: "school-admin-489e6.appspot.com",
        messagingSenderId: "549677402125",
        appId: "1:549677402125:web:3fbada8a196dee7cdf2d44",
        measurementId: "G-FFHTZXKS9W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore and make it globally accessible
window.db = firebase.firestore();
console.log("Firebase initialized successfully.");