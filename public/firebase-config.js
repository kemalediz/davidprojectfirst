// Firebase initialization for Marvelpedia.
//
// 🔧 SETUP: Replace the placeholder values below with your own Firebase project
// config. Find it in the Firebase console → Project settings → General →
// "Your apps" → SDK setup and configuration → Config.
//
// Note: the Firebase web apiKey is NOT a secret — it identifies your project and
// is safe to commit. Access is controlled by Firebase Authentication and your
// Firestore security rules (see README.md).

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// True until the placeholders above are filled in. Used to show a friendly
// "configure Firebase first" message instead of cryptic SDK errors.
export const isConfigured = !firebaseConfig.apiKey.startsWith("YOUR_");

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
