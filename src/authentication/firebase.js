// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAol_47COTXUQSbF5Cj3FQUudCpUu-LqHo",
  authDomain: "movies-web-app-rea2a-dts2022.firebaseapp.com",
  projectId: "movies-web-app-rea2a-dts2022",
  storageBucket: "movies-web-app-rea2a-dts2022.appspot.com",
  messagingSenderId: "673680651918",
  appId: "1:673680651918:web:1433c31c49ad22b6e5fbdf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const onHandleSignUpWithEmailAndPassword = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      const navigate = useNavigate();
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;

      if (errorCode === "auth/wrong-password") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "wrong password!",
        });
      }
      if (errorCode === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "user not found!",
        });
      }
    });
};

const onHandleSignInWithEmailAndPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const navigate = useNavigate();
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;

      if (errorCode === "auth/wrong-password") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "wrong password!",
        });
      }
      if (errorCode === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "user not found!",
        });
      }
    });
};

const onHandleResetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email)
    .then((res) => console.log(res))
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
};

const onHandleSignOut = async () => {
  await signOut(auth)
    .then((res) => {
      console.log("success logout", res);
    })
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
};

export {
  auth,
  onHandleSignInWithEmailAndPassword,
  onHandleSignUpWithEmailAndPassword,
  onHandleResetPassword,
  onHandleSignOut,
};
