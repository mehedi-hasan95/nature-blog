import React, { createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const authInfo = {};
    return (
        <QueryClientProvider client={queryClient}>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </QueryClientProvider>
    );
};

export default AuthProvider;
