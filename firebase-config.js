
// Load Firebase SDK dynamically
const script1 = document.createElement("script");
script1.src = "https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js";
script1.onload = () => {
    const script2 = document.createElement("script");
    script2.src = "https://www.gstatic.com/firebasejs/8.2.1/firebase-firestore.js";
    script2.onload = initializeFirebase;
    document.head.appendChild(script2);
};
document.head.appendChild(script1);

function initializeFirebase() {
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
    window.db = firebase.firestore(); // Store db in global scope


}
