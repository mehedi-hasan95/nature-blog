import React, { createContext } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const authInfo = {};
    return (
        <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    );
};

export default AuthProvider;
