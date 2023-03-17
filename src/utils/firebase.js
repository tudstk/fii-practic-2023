import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDvfVpTCfizgeNsqTvgYt5ar-1VtdbxcEc",
  authDomain: "fii-practic-bytex.firebaseapp.com",
  projectId: "fii-practic-bytex",
  storageBucket: "fii-practic-bytex.appspot.com",
  messagingSenderId: "1096904424169",
  appId: "1:1096904424169:web:9ff793371d58ef9c768e78",
}

const app = initializeApp(firebaseConfig)

const authService = getAuth()
const dbService = getFirestore(app)

const auth = {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
}

export { auth, dbService, authService }
export default app
