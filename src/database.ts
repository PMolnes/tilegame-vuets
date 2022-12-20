// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { child, getDatabase, limitToFirst, onValue, orderByChild, query, ref } from "firebase/database";
import type { UserScore } from "./types/userScore";
import { ref as vueRef } from 'vue';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FB_DB_URL,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const highScoresRef = ref(db, 'highscores/');

export const getTopFive = (measure: string) => {
  const topFive = vueRef<UserScore[]>([]);
  onValue(
    query(child(ref(db), "highscores/"), orderByChild(measure), limitToFirst(5)),
    (snapshot) => {
      if (snapshot.exists()) {
        topFive.value = [];
        snapshot.forEach(childSnapshot => {
          topFive.value.push({
            name: childSnapshot.val().name,
            score: childSnapshot.val().score,
            time: childSnapshot.val().time
          });
        })
      }
    }
  )
  return topFive;
}
