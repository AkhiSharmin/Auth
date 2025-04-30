import React, { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const authInfo = {
    name: "Hey my man",
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
