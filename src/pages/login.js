import { app } from '../services/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Login successful:", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login error:", errorCode, errorMessage);
    });
};


