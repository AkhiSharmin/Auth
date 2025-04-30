import React, { createContext } from "react";

const AuthContext = createContext(null);

const authInfo = {
  name: "Mati te ami jabo mise",
};

const AuthProviders = ({ children }) => {
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
 */
