import {
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const name = "Hlw my Man";

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const singInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("currently logged user", currentUser);
  //     setUser(currentUser);
  //   } else {
  //     console.log("No user logged In");
  //     setUser(null);
  //   }
  // });

  const authInfo = {
    name,
    user,
    loading,
    singInWithGoogle,
    createUser,
    singInUser,
    singOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

/**
 * 1.create context with null as default
 * 2.create provider
 * 3.set a value
 * 4.[attention please]
 * 5.use the auth provider in the main.jsx
 * 6.access the children inside the authProvider in the main.jsx
 * 7. export AuthContext
 */
