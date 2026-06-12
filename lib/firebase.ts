// Placeholder Firebase configuration and initialization
// Replace the values with your actual Firebase project credentials.
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  databaseURL: "YOUR_DATABASE_URL",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export Firebase services for use throughout the app
export const db = getDatabase(app);
export const auth = getAuth(app);

export default app;
