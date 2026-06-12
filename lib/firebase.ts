// Placeholder Firebase configuration and initialization
// Replace the values with your actual Firebase project credentials.
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Use environment variables for real credentials. Fallback to placeholder values that
// satisfy Firebase's URL parsing requirements during static builds.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "FAKE_API_KEY",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "fake-auth-domain.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "fake-project-id",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "fake-storage-bucket.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:1234567890:web:abcdef123456",
  // Provide a well‑formed URL to avoid runtime parsing errors during static export.
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "https://example.firebaseio.com",
};

// Initialize Firebase app only in the browser environment to avoid server‑side errors
let app = null;
if (typeof window !== "undefined") {
  // This block runs only on the client side
  app = initializeApp(firebaseConfig);
}

// Export Firebase services – they will be `null` during server‑side rendering/static export
export const db = app ? getDatabase(app) : null;
export const auth = app ? getAuth(app) : null;

export default app;
