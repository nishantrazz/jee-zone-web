import { auth, db, signInWithEmailAndPassword } from "./firebase.js";

async function loginAdmin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Check if the user exists in Firestore
        const adminDoc = await db.collection("admin").doc(email).get();
        if (adminDoc.exists) {
            window.location.href = "admin_dashboard.html"; // Redirect to admin dashboard
        } else {
            errorMessage.textContent = "You are not authorized as an admin.";
        }
    } catch (error) {
        errorMessage.textContent = error.message;
    }
}

export { loginAdmin };
